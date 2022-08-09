import { Component, OnInit } from '@angular/core';
import service from '../../../../data/service-IT.json';


@Component({
  selector: 'app-digital-one',
  templateUrl: './digital-one.component.html',
  styleUrls: ['./digital-one.component.css']
})
export class DigitalOneComponent implements OnInit {

  constructor() { }
  public service = service;
  public limit = 3;

  ngOnInit(): void {
  }

}
