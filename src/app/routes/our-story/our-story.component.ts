import { Component, OnInit } from '@angular/core';

import { PagePiece, DatePagePiece, TextPagePiece } from './page-piece.model';

@Component({
  selector: 'tam-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {
  firstTexts: string = require('./first-texts.jpg');
  library: string = require('./LibraryMP.png');
  loring: string = require('./loring.jpg');
  panera: string = require('./panera.jpg');
  tomFlash: string = require('./tom-flash.jpg');
  startDating: string = require('./tomfbreal.jpg');
  us: string = require('./us.jpg');
  usChristmas: string = require('./us-christmas.jpg');
  champagne: string = require('./champagne.jpg');

  pagePieces: PagePiece[] = [
    new DatePagePiece(new Date('02/01/2013')),
    new TextPagePiece(new Date('02/08/2013'), 'Our Story begins...', `<p>Tom and Morgan meet as students at the University of Minnesota.</p><img class="img-fluid center-img" src=${this.firstTexts}>`),
    new TextPagePiece(new Date('02/20/2013'), 'First Date', `<p>They study together at Panera Bread. Morgan hides her nerves intensely prepping for her equine management exam, while Tom is too nervous to study for computer vision.</p><img class="short-img img-fluid" src=${this.panera}>`).flip(),
    new TextPagePiece(new Date('02/22/2013'), 'First "Real" Date', `<p>Tom treats Morgan to a romantic dinner at Loring Pasta Bar, and later they shared their first kiss.</p><img class="short-img img-fluid" src=${this.loring}>`),
    new DatePagePiece(new Date('03/01/2013')),
    new TextPagePiece(new Date('03/23/2013'), "Tom Meets Morgan's dog, Flash", `<img src="${this.tomFlash}" class="img-fluid center-img">`).flip(),
    new TextPagePiece(new Date('03/25/2013'), 'Tom asks Morgan to be his girlfriend', `She says "yes!"<hr><img src="${this.startDating}" class="img-fluid center-img">`),
    new DatePagePiece(new Date('05/01/2013')),
    new TextPagePiece(new Date('05/24/2013'), 'I love you!', 'Tom and Morgan first say "I love you."' + `<img src="${this.us}" class="img-fluid center-img">`).flip(),
    new DatePagePiece(new Date('11/01/2016')),
    new TextPagePiece(new Date('11/05/2016'), 'Tom Proposes', 'Tom proposes to Morgan in front of the Thomas Jefferson Memorial, while in Washington DC visiting Morgan’s sister Killian.'),
  ];
  constructor() {
    const today = new Date();
    const todayPiece = new TextPagePiece(today, 'Today!', `<img src="${this.usChristmas}" class="img-fluid center-img">`);
    const weddingDate = new Date('09/02/2017');
    const weddingPiece = new TextPagePiece(weddingDate, 'Tom and Morgan to get married!', '<p>Tom and Morgan will exchange vows, on the MacDonald’s farm, surrounded by all of the people who have supported them.</p>' + `<img src="${this.champagne}" class="img-fluid center-img">`)
    if (+today < +weddingDate) {
      this.pagePieces.push(todayPiece.flip(), weddingPiece);
    }
    else {
      this.pagePieces.push(weddingPiece.flip(), todayPiece);
    }
  }

  ngOnInit() {
  }

}
