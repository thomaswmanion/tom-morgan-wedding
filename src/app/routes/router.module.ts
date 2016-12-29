import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { appRoutes } from './routes';


const declarations = appRoutes.map(r => r.component);
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAE0MrM-Pcgtm_FUfIWtUg5rQfXQZ1z6WI'
        })
    ],
    providers: [
    ],
    declarations
})
export class AppRouterModule { }
