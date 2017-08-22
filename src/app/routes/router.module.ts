import { CountdownComponent } from './../countdown/countdown.component';
import { LogoutComponent } from './logout/logout.component';
import { SaveTheDateComponent } from './save-the-date/save-the-date.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryInformationComponent } from './registry-information/registry-information.component';
import { VenueLodgingComponent } from './venue-lodging/venue-lodging.component';
import { BridalPartyComponent } from './bridal-party/bridal-party.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroupDirective, FormControlDirective } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { appRoutes } from './routes';
import { KeyFormComponent } from './login/key-form/key-form.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { CreateFormComponent } from './login/create-form/create-form.component';
import { ContactInformationComponent } from './save-the-date/contact-information/contact-information.component';
import { FaqComponent } from './faq/faq.component';
import { WeddingDayComponent } from './wedding-day/wedding-day.component';
import { SundayInviteComponent } from './rsvp/sunday-invite/sunday-invite.component';
import { WeekendActivitiesComponent } from './weekend-activities/weekend-activities.component';


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAE0MrM-Pcgtm_FUfIWtUg5rQfXQZ1z6WI'
        }),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        FormGroupDirective, FormControlDirective
    ],
    declarations: [
        LoginComponent,
        HomeComponent,
        OurStoryComponent,
        BridalPartyComponent,
        WeddingDayComponent,
        VenueLodgingComponent,
        RegistryInformationComponent,
        RsvpComponent,
        FaqComponent,
        SaveTheDateComponent,
        LogoutComponent,
        KeyFormComponent,
        LoginFormComponent,
        CreateFormComponent,
        ContactInformationComponent,
        CountdownComponent,
        SundayInviteComponent,
        WeekendActivitiesComponent
    ]
})
export class AppRouterModule { }
