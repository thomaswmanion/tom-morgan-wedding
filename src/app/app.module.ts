import './theme/theme-loader';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppRouterModule } from './routes/router.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { MenuComponent } from './nav/menu/menu.component';
import { MenuItemComponent } from './nav/menu/menu-item/menu-item.component';
import { TopNavComponent } from './nav/top-nav/top-nav.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyD_cnUOgg2DGQbCwpkb1lPhehraeNdc9FQ',
  authDomain: '<your-project-authdomain>',
  databaseURL: 'https://tom-morgan-wedding.firebaseio.com/',
  storageBucket: 'gs://tom-morgan-wedding.appspot.com',
  messagingSenderId: '<your-messaging-sender-id>'
};

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
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRouterModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
