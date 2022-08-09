import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-standard',
  templateUrl: './blog-standard.component.html',
  styleUrls: ['./blog-standard.component.css']
})
export class BlogStandardComponent implements OnInit {

  constructor() { }
   // Footer style
   classname = "grey-bg-footer";
   ftlogo = "assets/img/logo-3.png";
   ftshape = "assets/img/lines/09.png";
   ftshape2 = "assets/img/lines/10.png";
   ftshapeclass = "line-three";
   ftshape2class = "line-four";

  ngOnInit(): void {
  }

}
