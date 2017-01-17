import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFire } from 'angularfire2';
import * as $ from 'jquery';

import { UserState } from './user.state';

@Component({
  selector: 'tam-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserState]
})
export class AppComponent {
  weddingBanner: string = require('./Wedding-Banner.gif');
  public isMenuCollapsed: boolean;
  public isLoggedIn: boolean = false;
  public route: string;

  constructor(
    private router: Router,
    private af: AngularFire,
    private userState: UserState
  ) {
    this.scrollToTopOnRouteChange();
    this.userState.authState.subscribe((state) => {
      this.isLoggedIn = !!state;
    });
  }

  toggleNav(toState: boolean): void {
    if (toState === undefined) {
      this.isMenuCollapsed = !this.isMenuCollapsed;
    }
    else {
      this.isMenuCollapsed = toState;
    }
  }

  scrollToTopOnRouteChange(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      console.log(evt);
      document.body.scrollTop = 0;

      if ($(document).width() <= 500) {
        this.toggleNav(true);
      }
    });
  }

  logout(): void {
    this.af.auth.logout();
  }
}
