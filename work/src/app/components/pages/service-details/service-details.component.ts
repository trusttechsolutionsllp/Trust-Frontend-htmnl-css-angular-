import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {  ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})


export class ServiceDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  
  // Footer style
  classname = "grey-bg-footer";
  ftlogo = "assets/img/logo-3.png";
  ftshape = "assets/img/lines/09.png";
  ftshape2 = "assets/img/lines/10.png";
  ftshapeclass = "line-three";
  ftshape2class = "line-four";
  title = 'Services';

  ngOnInit(): void { 
    var key = this.router.snapshot.params['key'];
    this.title = key.replace( '-', " ");
  }

}
