import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tam-wedding-day',
  templateUrl: './wedding-day.component.html',
  styleUrls: ['./wedding-day.component.scss']
})
export class WeddingDayComponent {
  // attire images
  check: string = require('./check.png');
  mosquito: string = require('./mosquito.png');
  sun: string = require('./sun.png');
  x: string = require('./X.png');

  marybud: string = require('./marybud-dogs.jpg');
  parkingMap: string = require('./parking.png');
  googleMapsLink: string = 'https://www.google.com/maps/@42.4816169,-87.969902,509m/data=!3m1!1e3';
  events: DayEvent[] = [
    new DayEvent('4:00p - 4:45p', 'Shuttle from Holiday Inn to MaryBud Farm'),
    new DayEvent('5:00p - 5:30p', 'Ceremony'),
    new DayEvent('5:30p - 6:00p', 'Reception'),
    new DayEvent('6:00p - 8:00p', 'Dinner'),
    new DayEvent('8:00p - 12:00a', 'Celebration')
  ];
}

class DayEvent {
  constructor(
    public time: string,
    public description: string
  ) { }
}