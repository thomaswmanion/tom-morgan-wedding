import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tam-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  us: string = require('./230.jpg');

  constructor() { }

  ngOnInit() {
  }

}
