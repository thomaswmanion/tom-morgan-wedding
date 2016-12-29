import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tam-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  public isScrolled:boolean = false;
  @Output() public menuCollapsed: EventEmitter<boolean> = new EventEmitter();

  public toggleMenu() {
    this.menuCollapsed.emit(undefined);
  }
}
