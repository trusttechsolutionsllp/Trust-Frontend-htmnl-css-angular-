import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mt4-essentials',
  templateUrl: './mt4-essentials.component.html',
  styleUrls: ['./mt4-essentials.component.css']
})
export class Mt4EssentialsComponent implements OnInit {

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
