import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.component.html',
  styleUrls: ['./refund-policy.component.css']
})
export class RefundPolicyComponent implements OnInit {

  // Footer style
  classname = "grey-bg-footer";
  ftlogo = "assets/img/logo-3.png";
  ftshape = "assets/img/lines/09.png";
  ftshape2 = "assets/img/lines/10.png";
  ftshapeclass = "line-three";
  ftshape2class = "line-four";
  
  constructor() { }

  ngOnInit(): void {
  }

}
