import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserState } from '../../user.state';
import { FirebaseObjectObservable, AngularFire } from 'angularfire2';
import { FirebaseObjectFactoryOpts } from "angularfire2/interfaces";
import { RSVP, RSVPGuest } from "./rsvp.model";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'tam-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  public userProfileObs: FirebaseObjectObservable<any>;
  public lastGuestCode: string;
  public guestCode: string = '';
  public rsvpObs: FirebaseObjectObservable<RSVP>;
  public rsvp: RSVP;
  public sub: Subscription;
  public statusColor: string = '';
  public status: string = '';
  public isCodeDisabled: boolean = false;
  public searchText: string = 'Search';

  constructor(
    public af: AngularFire
  ) { }

  ngOnInit() {
  }

  async checkCode() {
    this.searchText = 'Searching...';
    if (this.guestCode && this.guestCode.length > 5) {
      this.guestCode = this.guestCode.substring(0, 5);
    }
    if (this.isValidCode()) {
      try {
        await this.lookupCode();
      }
      catch (e) {
        this.searchText = 'Search';
      }

    }
    else {
      this.searchText = 'Search';
    }
    this.lastGuestCode = this.guestCode;
  }
  isValidCode(): boolean {
    return this.guestCode
      && this.guestCode.length === 5
      && this.lastGuestCode !== this.guestCode
      && this.guestCode.indexOf('/') === -1
      && !this.isCodeDisabled;
  }
  reset(): void {
    this.rsvpObs = undefined;
    this.rsvp = undefined;
    this.sub && this.sub.unsubscribe();
    this.sub = undefined;
  }
  async lookupCode() {
    this.reset();
    const rsvpObj = this.af.database.object(`/rsvps/${this.guestCode}`)
    console.log('here', rsvpObj);
    //rsvpObj.update(createDummy());
    this.sub = rsvpObj.subscribe(obj => {

      if (obj.$exists && obj.$exists()) {
        this.rsvpObs = rsvpObj;
        this.rsvp = RSVP.parse(obj);
        this.isCodeDisabled = true;
        console.log(this.rsvp);
      }
      else {
        this.sub.unsubscribe();
      }
    });
  }

  setSaving() {
    this.statusColor = 'yellow';
    this.status = 'Saving...';
  }

  setSaved() {
    this.statusColor = 'green';
    this.status = 'Saved!';
  }

  setError() {
    this.statusColor = 'red';
    this.status = 'Error...';
  }

  update(): void {
    this.setSaving();
    this.rsvp.numSaves++;
    this.rsvpObs.update(this.rsvp).then(success => {
      this.setSaved();
    }, err => {
      this.setError();
    })
  }
}

function createDummy(): RSVP {
  const rsvp = new RSVP();
  rsvp.rsvpGuests.push(new RSVPGuest('Tom', false), new RSVPGuest('', false));
  return rsvp;
}