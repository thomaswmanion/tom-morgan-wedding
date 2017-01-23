import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ContactInformation } from './contact-information-form.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class ContactInformationService {

    constructor(
        private af: AngularFire
    ) {}

    saveContactInfo(contactInfo: ContactInformation): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.af.database.list('/contacts', {
                query: {
                    limitToFirst: 0
                }
            }).push(contactInfo).then(() => resolve(), () => reject());
        });
    }
}