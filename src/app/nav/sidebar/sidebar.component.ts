import { Component, ElementRef, HostListener, ViewEncapsulation, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tam-sidebar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  public menuHeight: number;
  @Output() public menuCollapsed: EventEmitter<boolean> = new EventEmitter();
  public isMenuCollapsed: boolean = false;
  public isMenuShouldCollapsed: boolean = false;


  constructor(private _elementRef: ElementRef) { }

  public ngOnInit(): void {
    if (this.shouldMenuCollapse()) {
      this.menuCollapse();
    }
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.updateSidebarHeight());
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    const isMenuShouldCollapsed = this.shouldMenuCollapse();
    if (isMenuShouldCollapsed) {
      this.menuCollapse();
      this.updateSidebarHeight();
    } else if (!isMenuShouldCollapsed) {
      this.menuExpand();
      this.updateSidebarHeight();
    }
  }

  public menuExpand(): void {
    this.isMenuCollapsed = false;
    this.menuCollapsed.emit(this.isMenuCollapsed);
  }

  public menuCollapse(): void {
    this.isMenuCollapsed = true;
    this.menuCollapsed.emit(this.isMenuCollapsed);
  }

  public updateSidebarHeight(): void {
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  private shouldMenuCollapse(): boolean {
    return window.innerWidth <= 1200;
  }
}
