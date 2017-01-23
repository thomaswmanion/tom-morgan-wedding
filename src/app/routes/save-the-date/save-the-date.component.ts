import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tam-save-the-date',
  templateUrl: './save-the-date.component.html',
  styleUrls: ['./save-the-date.component.scss']
})
export class SaveTheDateComponent implements OnInit {
  std: string = require('./Save the Date 3.jpg');
  
  constructor() { }

  ngOnInit() {
  }

}
