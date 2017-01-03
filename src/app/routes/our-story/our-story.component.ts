import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tam-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {
  umn: string = require('./UMN-Logo.png');
  library: string = require('./LibraryMP.png');
  constructor() { }

  ngOnInit() {
  }

}
