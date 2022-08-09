import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import service from '../../../../data/service-IT.json';

@Component({
  selector: 'app-cotent-ecommerce',
  templateUrl: './cotent-ecommerce.component.html',
  styleUrls: ['./cotent-ecommerce.component.css']
})
export class CotentEcommerceComponent implements OnInit {

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
