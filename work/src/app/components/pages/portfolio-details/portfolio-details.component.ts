import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {

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
