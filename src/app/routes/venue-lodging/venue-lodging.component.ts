import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tam-venue-lodging',
  templateUrl: './venue-lodging.component.html',
  styleUrls: ['./venue-lodging.component.scss']
})
export class VenueLodgingComponent implements OnInit {
  holidayInn: string = require('./holiday-inn.jpg');

  bus: string = require('./bus.png');
  car: string = require('./car.png');
  taxi: string = require('./taxi.png');
  plane: string = require('./plane.png');

  constructor() { }

  ngOnInit() {
  }

}
