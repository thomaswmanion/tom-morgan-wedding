import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tam-venue-lodging',
  templateUrl: './venue-lodging.component.html',
  styleUrls: ['./venue-lodging.component.scss']
})
export class VenueLodgingComponent implements OnInit {
  keylime: string = require('./KeyLime-Cove-Exterior.jpg');
  marybud: string = require('./marybud-dogs.jpg');

  constructor() { }

  ngOnInit() {
  }

}
