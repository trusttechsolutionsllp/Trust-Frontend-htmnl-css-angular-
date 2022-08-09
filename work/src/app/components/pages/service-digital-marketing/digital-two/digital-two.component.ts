import { Component, OnInit } from '@angular/core';
import service from '../../../../data/service-Digital.json';

@Component({
  selector: 'app-digital-two',
  templateUrl: './digital-two.component.html',
  styleUrls: ['./digital-two.component.css']
})
export class DigitalTwoComponent implements OnInit {

  constructor() { }
  public service = service;
  public limit = 3;

  ngOnInit(): void {
  }

}
