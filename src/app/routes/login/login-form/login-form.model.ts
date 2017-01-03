import { FormGroup, FormControl, Validators } from '@angular/forms';
const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

export class LoginForm {
    public email: string;
    public password: string;
    static getFormGroup(): FormGroup {
        return new FormGroup({
            email: new FormControl('', [Validators.required, Validators.pattern(emailRegex)]),
            password: new FormControl('', Validators.required)
        });
    }
}