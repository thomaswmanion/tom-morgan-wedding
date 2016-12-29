import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'tam-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isMenuCollapsed: boolean;

  constructor(private router: Router) {
    this.scrollToTopOnRouteChange();
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
            document.body.scrollTop = 0;
            
            if ($(document).width() <= 500) {
              this.toggleNav(true);
            }
        });
  }
}
