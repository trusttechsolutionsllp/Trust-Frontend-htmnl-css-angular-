import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

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
