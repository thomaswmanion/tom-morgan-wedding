import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VenueLodgingComponent } from './venue-lodging/venue-lodging.component';
import { RegistryInformationComponent } from './registry-information/registry-information.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { BridalPartyComponent } from './bridal-party/bridal-party.component';
import { PhotosComponent } from './photos/photos.component';
import { RsvpComponent } from './rsvp/rsvp.component';

export const appRoutes: Routes = [
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
        path: 'venue-lodging',
        component: VenueLodgingComponent,
        data: {
            menu: {
                title: 'Venue & Lodging',
                icon: 'fa fa-fire'
            }
        }
    },
    {
        path: 'registry-information',
        component: RegistryInformationComponent,
        data: {
            menu: {
                title: 'Registry Information',
                icon: 'fa fa-shopping-cart'
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
        path: 'photos',
        component: PhotosComponent,
        data: {
            menu: {
                title: 'Photos',
                icon: 'fa fa-file-image-o'
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
    }
];
