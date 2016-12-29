import './theme/theme-loader';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRouterModule } from './routes/router.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { MenuComponent } from './nav/menu/menu.component';
import { MenuItemComponent } from './nav/menu/menu-item/menu-item.component';
import { TopNavComponent } from './nav/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    MenuItemComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
