import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-v2',
  templateUrl: './services-v2.component.html',
  styleUrls: ['./services-v2.component.css']
})
export class ServicesV2Component implements OnInit {

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
