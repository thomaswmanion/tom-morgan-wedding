import { AngularFire } from 'angularfire2';
import { SundayAttendance } from '../rsvp.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tam-sunday-invite',
  templateUrl: './sunday-invite.component.html',
  styleUrls: ['./sunday-invite.component.scss']
})
export class SundayInviteComponent implements OnInit {
  @Input('rsvp') rsvp: SundayAttendance;
  public standaloneForm: boolean = false;
  public statusColor: string = '';
  public status: string = '';
  public saveDisabled = '';

  constructor(
    public af: AngularFire
  ) { }

  ngOnInit() {
    if (!this.rsvp) {
      this.standaloneForm = true;
      this.rsvp = new SundayAttendance();
    }
  }
  setSaving() {
    this.statusColor = 'yellow';
    this.status = 'Saving...';
    this.saveDisabled = 'disabled';
  }

  setSaved() {
    this.statusColor = 'green';
    this.status = 'Saved!';
    this.saveDisabled = 'disabled';
  }

  setError() {
    this.statusColor = 'red';
    this.status = 'Error...';
    this.saveDisabled = '';
  }

  save() {
    return new Promise<void>((resolve, reject) => {
      this.setSaving();
      this.af.database.list('/sunday-invites', {
        query: {
          limitToFirst: 0
        }
      }).push(this.rsvp).then(() => {
        this.setSaved();
        resolve();
      }, () => {
        this.setError();
        reject();
      });
    });
  }
}
