import { Router } from '@angular/router';

import { UserState } from '../user.state';

export class ProtectedRoute {
    constructor(
        public router: Router,
        public userState: UserState
    ) {
        this.userState.authState.subscribe((authState) => {
            if (authState === null) {
                this.userState.lastRoutePriorToLogin = this.router.url;
                this.router.navigate(['login']);
            }
            if (authState) {
                const userProfileObservable = this.userState.readUserProfileObservable();
                userProfileObservable && userProfileObservable.subscribe()
            }
        });
    }
}
