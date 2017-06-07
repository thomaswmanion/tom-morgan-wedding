import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VenueLodgingComponent } from './venue-lodging/venue-lodging.component';
import { RegistryInformationComponent } from './registry-information/registry-information.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { BridalPartyComponent } from './bridal-party/bridal-party.component';
//import { PhotosComponent } from './photos/photos.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
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
        path: 'faq',
        component: FaqComponent,
        data: {
            menu: {
                title: "FAQ's",
                icon: 'fa fa-question'
            }
        }
    },
    {
        path: 'venue-lodging',
        component: VenueLodgingComponent,
        data: {
            menu: {
                title: 'Venue & Lodging',
                icon: 'fa fa-fire'
            }
        }
    },
    /*{
        path: 'photos',
        component: PhotosComponent,
        data: {
            menu: {
                title: 'Photos',
                icon: 'fa fa-file-image-o'
            }
        }
    },*/
    {
        path: 'registry-information',
        component: ComingSoonComponent,
        //component: RegistryInformationComponent,
        data: {
            menu: {
                title: 'Registry Information',
                icon: 'fa fa-shopping-cart'
            }
        }
    },
    {
        path: 'rsvp',
        //component: RsvpComponent,
        component: ComingSoonComponent,
        data: {
            menu: {
                title: 'RSVP',
                icon: 'fa fa-envelope-o'
            }
        }
    },
    {
        path: 'rsvp-beta',
        component: RsvpComponent
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
