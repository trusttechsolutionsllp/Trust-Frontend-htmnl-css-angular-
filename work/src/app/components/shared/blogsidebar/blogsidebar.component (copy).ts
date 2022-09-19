import { Component, OnInit } from '@angular/core';
// import blog from '../../../data/blog/blog.json';
// import blogcategory from '../../../data/blog/blogcategory.json';
import blogtags from '../../../data/tags.json';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ApiService } from '../../../service/api.service';
import { Post } from '../../../service/post';
import { PostCategories } from '../../../service/post-categories';

@Component({
  selector: 'app-blogsidebar',
  templateUrl: './blogsidebar.component.html',
  styleUrls: ['./blogsidebar.component.css']
})
export class BlogsidebarComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location
  ) { }

  posts: Post[];
  recentposts: Post[];
  selectedPost: Post = { id: null, category_name: null, name: null, title: null, blog_content: null, publishdate: null, short_desc: null, link_url: null, image: null }
  postsCount: number;

  page: number = 1;
  postCategories: PostCategories[];
  seletecCategory: PostCategories = { id: null, category_name: null, status: null, blog_count: null }
  public blogtags = blogtags;

  ngOnInit(): void {
    this.getPostCategories();
    this.getLastestPosts();
  }

  getPostCategories() {
    this.apiService.getPostCategories().subscribe((postCategories: PostCategories[]) => {
      this.postCategories = postCategories;
      // console.log(this.postCategories);
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

}
