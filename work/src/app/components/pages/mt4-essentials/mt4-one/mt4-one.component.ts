import { Component, OnInit } from '@angular/core';
import service from '../../../../data/mt4-essentials.json';

@Component({
  selector: 'app-mt4-one',
  templateUrl: './mt4-one.component.html',
  styleUrls: ['./mt4-one.component.css']
})
export class Mt4OneComponent implements OnInit {

  constructor() { }
  public service = service;
  public limit = 8;

  ngOnInit(): void {
  }

}
