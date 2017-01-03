import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroupDirective, FormControlDirective } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { appRoutes } from './routes';
import { KeyFormComponent } from './login/key-form/key-form.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { CreateFormComponent } from './login/create-form/create-form.component';


const declarations = appRoutes.map(r => r.component).concat([KeyFormComponent, LoginFormComponent, CreateFormComponent]);
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAE0MrM-Pcgtm_FUfIWtUg5rQfXQZ1z6WI'
        }),
        ReactiveFormsModule
    ],
    providers: [
        FormGroupDirective, FormControlDirective
    ],
    declarations
})
export class AppRouterModule { }
