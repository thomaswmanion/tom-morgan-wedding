import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

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
        path: 'data-binding',
        component: DataBindingComponent,
        data: {
            menu: {
                title: 'Data Binding',
                icon: 'fa fa-lock',
                selected: false
            }
        }
    }
];
