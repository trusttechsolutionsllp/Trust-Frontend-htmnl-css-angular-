import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../service/api.service';  
import { Post } from '../../../../service/post';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  posts: Post[];
  recentposts: Post[];
  selectedPost: Post = { id: null, category_name: null, name: null, title: null, blog_content: null, publishdate: null, short_desc: null, link_url: null, image: null }
  postsCount: number;

  ngOnInit(): void { 
    this.getLastestPosts();
  } 

  getLastestPosts() {
    this.apiService.getLatestPosts().subscribe((posts: Post[]) => {
       this.recentposts = posts;
      this.recentposts = posts.splice(0,3);
      // this.postsCount = posts.length;
      // console.log('recent posts count =' +this.recentposts.length);
    })
  }

}
