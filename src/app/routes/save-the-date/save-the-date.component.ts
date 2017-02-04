import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tam-save-the-date',
  templateUrl: './save-the-date.component.html',
  styleUrls: ['./save-the-date.component.scss']
})
export class SaveTheDateComponent implements OnInit {
  std: string = require('!!file-loader?name=[name].[ext]!!./Save-the-Date.jpg');
  signature: string = require('!!file-loader?name=[name].[ext]!./signature.gif');
  event: string = require('!!file-loader?name=[name].[ext]!./MacDonald-Manion-Wedding.ics');

  constructor() { }

  ngOnInit() {
  }

}
