import { Component, OnInit } from '@angular/core';

import { PartyMember } from './party-member.model';

@Component({
  selector: 'tam-bridal-party',
  templateUrl: './bridal-party.component.html',
  styleUrls: ['./bridal-party.component.scss']
})
export class BridalPartyComponent implements OnInit {
  public bridesmaids: PartyMember[] = [
    new PartyMember('Dylan Kipp', 'Co-Maid of Honor', 'Best friend from dog shows, and since 2004 when we were brought to the pool hall'),
    new PartyMember('Killian MacDonald', 'Co-Maid of Honor', 'Sister since 1995 after I tried to name her Lassie or Jasmine'),
    new PartyMember('Erica Hodny', 'Bridesmaid', 'Best friend, and fellow Gopher, since 2009 when she was my sexile savior with Breanna'),
    new PartyMember('Hannah Kreindler', 'Bridesmaid', 'Best friend from childhood, and since 1997 when saving her from the entire first grade class chasing “the new kid”'),
    new PartyMember('Katie Manion', 'Bridesmaid', 'Sister-to-be since Nov. 5th, 2016'),
    new PartyMember('Sarita Patel', 'Bridesmaid', 'Best friend, and fellow Gopher, since 2009 when she summoned me with “Party in the USA”'),
    new PartyMember('Jessica Tranter', 'Bridesmaid', 'Sister since our 2011 trip through the MN State Fair’s Miracle of Birth Center'),
    new PartyMember('Breanna Wimmler', 'Bridesmaid', 'Best friend, and fellow Gopher, since 2009 when she was my sexile savior with Erica'),
  ];
  public groomsmen: PartyMember[] = [];
  constructor() { }

  ngOnInit() {
  }

}
