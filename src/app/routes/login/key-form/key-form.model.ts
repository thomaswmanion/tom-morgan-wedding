import { FormGroup, FormControl, Validators } from '@angular/forms';

export class KeyForm {
    public key: string;

    static getFormGroup(): FormGroup {
        return new FormGroup({
            key: new FormControl('', [Validators.required])
        });
    }
}
