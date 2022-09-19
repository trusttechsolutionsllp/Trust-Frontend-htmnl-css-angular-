import { Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ApiService } from '../../../service/api.service';
import { Post } from '../../../service/post';
import { PostCategories } from '../../../service/post-categories';

@Component({
  selector: 'app-blog-standard',
  templateUrl: './blog-standard.component.html',
  styleUrls: ['./blog-standard.component.css']
})
export class BlogStandardComponent implements OnInit {

  // constructor() { }
  // Footer style
  classname = "grey-bg-footer";
  ftlogo = "assets/img/logo-3.png";
  ftshape = "assets/img/lines/09.png";
  ftshape2 = "assets/img/lines/10.png";
  ftshapeclass = "line-three";
  ftshape2class = "line-four";

  posts: Post[];
  recentposts: Post[];
  selectedPost: Post = { id: null, category_name: null, name: null, title: null, blog_content: null, publishdate: null, short_desc: null, link_url: null, image: null }
  postsCount: number;
  // params: any;
  title = 'Our Blog';

  p: number;
  // pagination
  page: number = 1;
  postCategories: PostCategories[];
  seletecCategory: PostCategories = { id: null, category_name: null, status: null, blog_count: null }


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const urlparams = this.route.snapshot.url;
    console.log(this.route.snapshot);
    // console.log('roturer= '+ this.router.url);
    // console.log( "url param = "+ this.route.snapshot.paramMap.get("category_name") );
    console.log( "url param = "+ this.route.snapshot.params.category_name );
    const category = this.route.snapshot.params.category_name ; 
    if ( category ) {
      if ( category == 'all' || category == '') {
        this.readPosts();
        console.log('default load');
        // the full blog list already loaded in readPosts() fundtion 
      } else {
        console.log('loading by category: ' + this.route.snapshot.params.category_name);
        this.getPostByCategory();
      }
    }
    // if ( category )
    /* if (urlparams.length >= 2) {
      if (urlparams[0].path === 'blog' && urlparams[1].path === 'category') {
        if (this.route.snapshot.params.category_name == 'all' || this.route.snapshot.params.category_name == '') {
          this.readPosts();
          console.log('default load');
          // the full blog list already loaded in readPosts() fundtion 
        } else {
          console.log('loading by category: ' + this.route.snapshot.params.category_name);
          // this.getPostByCategory();
        }
      } */
    else {
      console.log('no url params, default load');
      this.readPosts();
    }
  }

  readPosts() {
    this.apiService.readPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      // this.recentposts = posts;
      // this.recentposts = posts.splice(0, 5);
      this.postsCount = posts.length;
      console.log('all posts count =' + this.postsCount);
      // console.log(this.posts);
    })
  }

  getLastestPosts() {
    this.apiService.getLatestPosts().subscribe((posts: Post[]) => {
      this.recentposts = posts;
      this.recentposts = posts.splice(0, 10);
      // this.postsCount = posts.length;
      // console.log('recent posts count =' +this.recentposts.length);
    })
  }

  getPostByCategory(): void {
    const category_name = this.route.snapshot.params.category_name;
    this.apiService.getPostByCategory(category_name).subscribe((posts: Post[]) => {
      console.log(posts);
      this.posts = posts;
      this.postsCount = posts.length;
      // this.title = posts[0].category_name;
      // console.log(this.postsCount);
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
