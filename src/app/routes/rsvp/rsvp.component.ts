import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserState } from '../../user.state';
import { FirebaseObjectObservable } from 'angularfire2';
import { ProtectedRoute } from '../protected.route';
@Component({
  selector: 'tam-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent extends ProtectedRoute implements OnInit {
  public userProfileObs: FirebaseObjectObservable<any>;
  constructor(
    router: Router,
    userState: UserState
  ) {
    super(router, userState);
  }

  ngOnInit() {
  }

}
