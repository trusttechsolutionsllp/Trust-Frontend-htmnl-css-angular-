import { Component, OnInit } from '@angular/core';
import service from '../../../../data/mt4-essentials.json';

@Component({
  selector: 'app-mt4-two',
  templateUrl: './mt4-two.component.html',
  styleUrls: ['./mt4-two.component.css']
})
export class Mt4TwoComponent implements OnInit {

  constructor() { }
  public service = service;
  public limit = 3;

  ngOnInit(): void {
  }

}
