import { FormGroup, FormControl, Validators } from '@angular/forms';

export class ContactInformation {
    public names: string;
    public houseAddress: string;
    public emailAddress: string;
    public phoneNumbers: string;
    public otherInfo: string;
    static getFormGroup(): FormGroup {
        return new FormGroup({
            names: new FormControl('', Validators.required),
            houseAddress: new FormControl('', Validators.required),
            emailAddress: new FormControl(''),
            phoneNumbers: new FormControl(''),
            otherInfo: new FormControl('')
        });
    }

    onSubmit(contactInformationForm) {

    }
}