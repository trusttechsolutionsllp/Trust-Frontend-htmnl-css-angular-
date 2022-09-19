import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ApiService } from '../../../service/api.service';
import { Post } from '../../../service/post';
import { PostDetail } from '../../../service/post-detail';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

    // Footer style
    classname = "grey-bg-footer";
    ftlogo = "assets/img/logo-3.png";
    ftshape = "assets/img/lines/09.png";
    ftshape2 = "assets/img/lines/10.png";
    ftshapeclass = "line-three";
    ftshape2class = "line-four";

    postDetail: PostDetail[];
    link_url: any;
  
    recentposts: Post[];
    selectedPost: Post = { id: null, category_name: null, name: null, title: null, blog_content: null, publishdate: null, short_desc: null, link_url: null, image: null }
    postsCount: number;
  
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private apiService: ApiService,
      private location: Location
    ) {}
  
    ngOnInit(): void {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.getPostByName();
      this.getLastestPosts();
    }
  
    getLastestPosts() {
      this.apiService.getLatestPosts().subscribe((posts: Post[]) => {
        this.recentposts = posts;
        this.recentposts = posts.splice(0, 2);
        this.postsCount = posts.length;
      })
    }
  
    // getPostByName( link_url: string ) {
    getPostByName(): void {
      // console.log(this.route.snapshot);
      const link_url = this.route.snapshot.params.link_url;
      this.apiService.getPostByName(link_url).subscribe((postDetail: PostDetail[]) => {
        this.postDetail = postDetail;
        //  console.log(this.postDetail);
      })
    }
   
  /* 
    goBack(): void {
      this.location.back();
    } */

}
