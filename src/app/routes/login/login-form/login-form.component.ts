import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AngularFire, FirebaseAuthState, AuthProviders, AuthMethods } from 'angularfire2';
import { LoginForm } from './login-form.model';
import { UserState } from '../../../user.state';

@Component({
  selector: 'tam-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private af: AngularFire,
    private router: Router,
    private userState: UserState
  ) { }

  ngOnInit() {
    this.loginForm = LoginForm.getFormGroup();
    this.af.auth.logout();
  }

  onSubmit({value, valid}: { value: LoginForm, valid: boolean }): void {
    const redirectRoute: string = this.userState.lastRoutePriorToLogin || '';
    this.af.auth.login({
      email: value.email,
      password: value.password
    }, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then((a: FirebaseAuthState) => {
      this.router.navigate([redirectRoute]);
    }).catch(e => {
      this.router.navigate([redirectRoute]);
    });
  }
}
