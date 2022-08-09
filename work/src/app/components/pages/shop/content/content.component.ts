import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import shop from '../../../../data/shop/shop.json';

import shopcategory from '../../../../data/shop/shopcategory.json'
import shoptags from '../../../../data/tags.json'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  // pagination
  page: number = 1; 
  constructor(private router: ActivatedRoute) { }
  public shopblock = shop;
  public shopcategory = shopcategory;
  public shoptags = shoptags;

  // Category Filter
  public setCategory(id: any) {
    this.shopcategory = id;
  }
  public getCategory() {
    return this.shopcategory;
  }
  public getPostsByCategory(catId) {
    return this.shopblock = shop.filter(item => { return item.category.includes(parseInt(catId)) });
  }
  // Tag Filter
  public setTag(id: any) {
    this.shoptags = id;
  }
  public getTag() {
    return this.shoptags;
  }
  public getPostsByTags(tagId) {
    return this.shopblock = shop.filter(item => { return item.tags.includes(parseInt(tagId)) });
  }

  // Fetch All filter
  public setPosts() {
    var postsByCategory = this.getCategory() != undefined ? this.getPostsByCategory(this.getCategory()) : '',
      postsByTags = this.getTag() != undefined ? this.getPostsByTags(this.getTag()) : '';

    if ((postsByCategory != '' || postsByCategory != undefined || postsByCategory != null) && postsByCategory.length > 0) {
      this.shopblock = postsByCategory;
    } else if ((postsByTags != '' || postsByTags != undefined || postsByTags != null) && postsByTags.length > 0) {
      this.shopblock = postsByTags;
    } 
  }
  ngAfterContentInit(): void {
    this.setCategory(this.router.snapshot.params.catId);
    this.setTag(this.router.snapshot.params.tagId);
    this.setPosts();
  }

}
