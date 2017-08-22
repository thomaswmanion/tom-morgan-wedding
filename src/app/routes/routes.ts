import { WeekendActivitiesComponent } from './weekend-activities/weekend-activities.component';
import { WeddingDayComponent } from './wedding-day/wedding-day.component';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VenueLodgingComponent } from './venue-lodging/venue-lodging.component';
import { RegistryInformationComponent } from './registry-information/registry-information.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { BridalPartyComponent } from './bridal-party/bridal-party.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SaveTheDateComponent } from './save-the-date/save-the-date.component';
import { FaqComponent } from "./faq/faq.component";

export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HomeComponent,
        data: {
            menu: {
                title: 'Home',
                icon: 'fa fa-home',
                selected: true
            }
        }
    },
    {
        path: 'story',
        component: OurStoryComponent,
        data: {
            menu: {
                title: 'Our Story',
                icon: 'fa fa-book'
            }
        }
    },
    {
        path: 'bridal-party',
        component: BridalPartyComponent,
        data: {
            menu: {
                title: 'Bridal Party',
                icon: 'fa fa-users'
            }
        }
    },
    {
        path: 'wedding-day',
        component: WeddingDayComponent,
        data: {
            menu: {
                title: "Our Wedding Day!",
                icon: 'fa fa-heart'
            }
        }
    },
    {
        path: 'weekend-activities',
        component: WeekendActivitiesComponent,
        data: {
            menu: {
                title: "Activities",
                icon: 'fa fa-calendar-plus-o'
            }
        }
    },
    {
        path: 'hotel-transport',
        component: VenueLodgingComponent,
        data: {
            menu: {
                title: 'Hotel & Travel',
                icon: 'fa fa-fire'
            }
        }
    },
    {
        path: 'registry-information',
        component: RegistryInformationComponent,
        data: {
            menu: {
                title: 'Registry Info',
                icon: 'fa fa-shopping-cart'
            }
        }
    },
    {
        path: 'rsvp',
        component: RsvpComponent,
        data: {
            menu: {
                title: 'RSVP',
                icon: 'fa fa-envelope-o'
            }
        }
    },
    {
        path: 'faq',
        component: FaqComponent,
        data: {
            menu: {
                title: "FAQ",
                icon: 'fa fa-question'
            }
        }
    },
    {
        path: 'save-the-date',
        component: SaveTheDateComponent/*,
        data: {
            menu: {
                title: 'Save the Date',
                icon: 'fa fa-save'
            }
        }*/
    },
    {
        path: 'logout',
        component: LogoutComponent,
        data: {
            menu: {
                title: 'Logout',
                icon: 'fa fa-sign-out',
                logout: true
            }
        }
    }
];
