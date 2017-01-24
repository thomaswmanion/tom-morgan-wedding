import { Component, OnInit } from '@angular/core';

import { PagePiece, DatePagePiece, TextPagePiece } from './page-piece.model';

@Component({
  selector: 'tam-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {
  umn: string = require('./UMN-Logo.png');
  library: string = require('./LibraryMP.png');
  loring: string = require('./loring.jpg');
  panera: string = require('./panera.jpg');

  pagePieces: PagePiece[] = [
    new DatePagePiece(new Date('02/01/2013')),
    new TextPagePiece(new Date('02/01/2013'), 'Tom and Morgan Meet', `<p>Tom and Morgan meet while students at the University of Minnesota.</p><img class="short-img img-fluid" src=${this.umn}>`),
    new TextPagePiece(new Date('02/01/2013'), 'First Date', `<p>They study together at Panera Bread. Morgan hides her nerves intensely prepping for her equine management exam, while Tom is too nervous to study for computer vision.</p><img class="short-img img-fluid" src=${this.panera}>`).flip(),
    new TextPagePiece(new Date('02/01/2013'), 'First "Real" Date', `<p>Tom treats Morgan to a romantic dinner at Loring Pasta Bar, and later they shared their first kiss.</p><img class="short-img img-fluid" src=${this.loring}>`),
    new DatePagePiece(new Date('03/01/2013')),
    new TextPagePiece(new Date('03/24/2013'), 'Tom Meets Flash and Belle', '').flip(),
    new TextPagePiece(new Date('03/24/2013'), 'Tom asks Morgan to be his Girlfriend', 'She says yes!'),
    new DatePagePiece(new Date('05/01/2013')),
    new TextPagePiece(new Date('03/24/2013'), 'I love you!', 'Tom and Morgan first said "I love you."').flip(),
    new DatePagePiece(new Date('11/01/2016')),
    new TextPagePiece(new Date('11/05/2016'), 'Tom Proposes', 'Tom proposed to Morgan while in Washington DC, under the guise of visiting Morgan’s sister at college, in front of the Thomas Jefferson Memorial'),
    new TextPagePiece(new Date(), 'Today!', '').flip(),
    new TextPagePiece(new Date('09/02/2017'), 'Tom and Morgan to get married!', 'Tom and Morgan will exchange vows, on the MacDonald’s farm, surrounded by all of the people who have supported them')
  ];
  constructor() { }

  ngOnInit() {
  }

}
