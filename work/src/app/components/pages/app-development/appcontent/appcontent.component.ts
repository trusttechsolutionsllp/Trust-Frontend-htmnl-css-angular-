import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import service from '../../../../data/service-IT.json';

@Component({
  selector: 'app-appcontent',
  templateUrl: './appcontent.component.html',
  styleUrls: ['./appcontent.component.css']
})
export class AppcontentComponent implements OnInit {
 
  constructor(private router: ActivatedRoute) { }
  public servicedetails = service;

    // public subitem = [];
  ngOnInit() {
  console.log(  this.router.snapshot.paramMap.get("id"));
  }

  public setPost(id: any) {
    this.servicedetails = service.filter((item: { id: any; }) => { return item.id == id });
  }

  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }

}
