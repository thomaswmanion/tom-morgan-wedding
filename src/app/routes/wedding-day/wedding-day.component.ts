import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tam-wedding-day',
  templateUrl: './wedding-day.component.html',
  styleUrls: ['./wedding-day.component.scss']
})
export class WeddingDayComponent {
  marybud: string = require('./marybud-dogs.jpg');
  events: DayEvent[] = [
    new DayEvent('4:00p - 4:45p', 'Shuttle from Holiday Inn to MaryBud Farm'),
    new DayEvent('5:00p - 5:30p', 'Ceremony'),
    new DayEvent('5:30p - 6:00p', 'Reception'),
    new DayEvent('6:00p - 8:00p', 'Dinner'),
    new DayEvent('8:00p - 12:00a', 'Celebration')
  ];
  attire: string = 'Suggested attire is relaxed formal (jacket optional) with lawn appropriate shoes as the ceremony and reception will be outdoors.';
}

class DayEvent {
  constructor(
    public time: string,
    public description: string
  ) { }
}