import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class UserState {
    private authStateSubject: BehaviorSubject<FirebaseAuthState> = new BehaviorSubject(undefined);
    public authState: Observable<FirebaseAuthState> = this.authStateSubject.asObservable();
    public lastRoutePriorToLogin: string;

    constructor(public af: AngularFire) {
        this.af.auth.subscribe((next: FirebaseAuthState) => {
            this.authStateSubject.next(next);
        });
    }

    get currentState(): FirebaseAuthState {
        return this.authStateSubject.getValue();
    }

    get uid(): string {
        return this.currentState && this.currentState.uid;
    }

    readUserProfileObservable(): FirebaseObjectObservable<string> {
        if (this.uid) {
            console.log(this.uid);
            return this.af.database.object(`/users/${this.uid}/profile`);
        }
        return undefined;
    }
}