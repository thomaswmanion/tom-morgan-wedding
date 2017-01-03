import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { Subscription } from 'rxjs/Rx';
import * as $ from 'jquery';

import { MenuService } from './menu.service';


@Component({
  selector: 'tam-menu',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit, OnDestroy {

  @Input() sidebarCollapsed: boolean = false;
  @Input() menuHeight: number;

  @Output() expandMenu = new EventEmitter<any>();

  public menuItems: any[];
  protected _menuItemsSub: Subscription;
  protected onRouteChange: Subscription;
  public outOfArea: number = -200;

  constructor(private router: Router, private menuService: MenuService, private af: AngularFire) {
    this.onRouteChange = this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        if (this.menuItems) {
          this.selectMenuAndNotify();
        } else {
          // on page load we have to wait as event is fired before menu elements are prepared
          setTimeout(() => this.selectMenuAndNotify());
        }
      }
    });

    this._menuItemsSub = this.menuService.menuItems.subscribe(this.updateMenu.bind(this));
  }

  public updateMenu(newMenuItems) {
    this.menuItems = newMenuItems;
    this.selectMenuAndNotify();
  }

  public selectMenuAndNotify(): void {
    if (this.menuItems) {
      this.menuItems = this.menuService.selectMenuItem(this.menuItems);
    }
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.onRouteChange.unsubscribe();
    this._menuItemsSub.unsubscribe();
  }

  public toggleSubMenu($event): boolean {
    const submenu = $($event.currentTarget).next();

    if (this.sidebarCollapsed) {
      this.expandMenu.emit(null);
      if (!$event.item.expanded) {
        $event.item.expanded = true;
      }
    } else {
      $event.item.expanded = !$event.item.expanded;
      submenu.slideToggle();
    }

    return false;
  }
}
