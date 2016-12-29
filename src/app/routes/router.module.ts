import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';

const declarations = appRoutes.map(r => r.component);
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    declarations
})
export class AppRouterModule { }
