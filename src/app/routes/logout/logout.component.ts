import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'tam-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(
    private af: AngularFire,
    private router: Router
  ) { }

  ngOnInit() {
    this.af.auth.logout();
    this.router.navigate(['']);
  }

}
