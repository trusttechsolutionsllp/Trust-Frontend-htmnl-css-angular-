import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ApiService } from '../../../../service/api.service';
import { Post } from '../../../../service/post';
import { PostCategories } from '../../../../service/post-categories';
// import blog from '../../../../data/blog/blog.json';
// import author from '../../../../data/team.json';

@Component({
  selector: 'app-content',
  template: '<p>ghgh</p>',
  // templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // pagination
  page: number = 1;

  posts: Post[];
  recentposts: Post[];
  selectedPost: Post = { id: null, category_name: null, name: null, title: null, blog_content: null, publishdate: null, short_desc: null, link_url: null, image: null }
  postsCount: number;
  // params: any;
  title = 'Our Blog';

  p: number;
  postCategories: PostCategories[];
  seletecCategory: PostCategories = { id: null, category_name: null, status: null, blog_count: null }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.readPosts();
    /* 
    // console.log( this.route.snapshot);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    const urlparams = this.route.snapshot.url;
    if (urlparams.length >= 2) {
      if (urlparams[0].path === 'blog' && urlparams[1].path === 'category') {
        if ( this.route.snapshot.params.category_name == 'all' || this.route.snapshot.params.category_name == '' ) {
          this.readPosts();
          // the full blog list already loaded in readPosts() fundtion 
        } else {
          console.log('loading by category: ' + this.route.snapshot.params.category_name);
          this.getPostByCategory();
        }
      }
    } else {
      this.readPosts();
    }
    this.getPostCategories();
    this.getLastestPosts(); */

  }

  readPosts() {
    this.apiService.readPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      // this.recentposts = posts;
      // this.recentposts = posts.splice(0, 5);
      this.postsCount = posts.length;
      console.log('all posts count ='+this.postsCount);
      // console.log(this.posts);
    })
  }

  getLastestPosts() {
    this.apiService.getLatestPosts().subscribe((posts: Post[]) => {
       this.recentposts = posts;
      this.recentposts = posts.splice(0,10);
      // this.postsCount = posts.length;
      // console.log('recent posts count =' +this.recentposts.length);
    })
  }

  getPostByCategory(): void {
    const category_name = this.route.snapshot.params.category_name;
    // console.log(category_name);
    this.apiService.getPostByCategory(category_name).subscribe((posts: Post[]) => {
      this.posts = posts;
      this.postsCount = posts.length;
      this.title = posts[0].category_name;      
      // console.log(this.postsCount);
      // console.log(this.posts);
    })
  }

  getPostCategories() {
    this.apiService.getPostCategories().subscribe((postCategories: PostCategories[]) => {
      this.postCategories = postCategories;
      // console.log(this.postCategories);
    })
  }

  selectPost(post: Post) {
    this.selectedPost = post;
  }

  goBack(): void {
    this.location.back();
  }

}
