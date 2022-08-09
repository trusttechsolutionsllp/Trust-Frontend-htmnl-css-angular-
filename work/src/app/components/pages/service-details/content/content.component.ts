import { Component, AfterContentInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import service from '../../../../data/service-IT.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

// const jsonData = service;
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }
  public servicedetails = service;

  currentItem;
  value;
  // res: [];

  // public subitem = [];
  ngOnInit() {
    var value = this.router.snapshot.params['key'];
    // this.filterData(this.servicedetails);
    this.currentItem = this.servicedetails.filter( function( record ){
      // console.log('key is'+ value );
      return record.key === value;
    }, value );
     console.log(this.currentItem);
    // this.servicedetails = this.currentItem;
    // console.log(this.servicedetails);

  }

  filterData( arrayData ) {
    arrayData.filter(ob => {
      console.log("Value:"+ ob);
      /*if (ob.value === 2 ) {
        this.res = ob;
      } else if (ob.children.length !== 0) {
        //console.log("length:"+ ob.children.length);
        this.filterData(ob.children);
      }*/
    });
  }
  public setPost(id: any) {
    this.servicedetails = service.filter((item: { id: any; }) => { return item.id == id });
  }

  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }

}
