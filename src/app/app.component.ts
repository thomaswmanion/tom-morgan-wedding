import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'acn-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isMenuCollapsed: boolean;

  toggleNav(toState: boolean): void {
    this.isMenuCollapsed = toState;
  }
}
