import { Component, OnInit } from '@angular/core';

import { PartyMember } from './party-member.model';

@Component({
  selector: 'tam-bridal-party',
  templateUrl: './bridal-party.component.html',
  styleUrls: ['./bridal-party.component.scss']
})
export class BridalPartyComponent implements OnInit {
  public bridesmaids: PartyMember[] = [
    new PartyMember('Dylan Kipp', 'Co-Maid of Honor', 'Best friend from dog shows, and since 2004 Best friend since 2003 when we showed dogs together', 'Houston, TX'),
    new PartyMember('Killian MacDonald', 'Co-Maid of Honor', 'Sister since 1995 after I tried to name her Lassie or Jasmine', 'Washington DC'),
    new PartyMember('Erica Hodny', 'Bridesmaid', 'Best friend, and fellow Gopher, since 2009 when we were neighbors on the Pre-Vet floor in the UMN dorms', 'Coon Rapids, MN'),
    new PartyMember('Hannah Kreindler', 'Bridesmaid', 'Best friend from childhood, and since 1997 when saving her from the entire first grade class chasing “the new kid”', 'Chicago, IL'),
    new PartyMember('Katie Manion', 'Bridesmaid', 'Sister-to-be since Nov. 5th, 2016', 'Menomonee Falls, WI'),
    new PartyMember('Sarita Patel', 'Bridesmaid', 'Best friend, and fellow Gopher, since 2009 when she summoned me in the dorms by blasting “Party in the USA"', 'Columbia, MO'),
    new PartyMember('Jessica Tranter', 'Bridesmaid', 'Sister since our 2011 trip through the MN State Fair’s Miracle of Birth Center', 'Syracuse, NY'),
    new PartyMember('Breanna Wimmler', 'Bridesmaid', 'Best friend, and fellow Gopher, since 2009 when we were neighbors on the Pre-Vet floor in the UMN dorms', 'Appleton, WI'),
  ];
  public groomsmen: PartyMember[] = [
    new PartyMember('Kyle Ewert', 'Co-Best Man', 'Childhood and Adulthood Friend.', 'Kenosha, WI'),
    new PartyMember('Brian Manion', 'Co-Best Man', 'Older Brother and Brother Friend. ', 'New Orleans, LA'),
    new PartyMember('Drew Haefner', 'Groomsman', 'College Roommate and Sports Friend. ', 'Duluth, MN'),
    new PartyMember('Stefan Platikanov', 'Groomsman', 'College Classmate and Gaming Friend.', 'Minneapolis, MN'),
    new PartyMember('Akersh Srivastava', 'Groomsman', 'Accenture Colleague and Tech Happenings Friend.', 'Seattle, WA'),
    new PartyMember('Kevin Tesch', 'Groomsman', 'High School and German Aficionado Friend.', 'Mukwonago, WI')
  ];
  constructor() { }

  ngOnInit() {
  }

}
