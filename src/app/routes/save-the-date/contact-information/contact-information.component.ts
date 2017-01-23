import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ContactInformation } from './contact-information-form.model';
import { ContactInformationService } from './contact-information.service';

@Component({
  selector: 'tam-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
  providers: [ContactInformationService]
})
export class ContactInformationComponent implements OnInit {
  contactInformationForm: FormGroup = ContactInformation.getFormGroup();
  status: string = 'Nothing sent yet.'
  statusColor: string = 'gray';
  formDisabled: boolean = false;

  constructor(
    private cis: ContactInformationService
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: { value: ContactInformation, valid: boolean }): void {
    this.formDisabled = true;
    this.cis.saveContactInfo(value).then(() => {
      this.statusColor = 'green';
      this.status = 'Successfully Uploaded!';
    }, () => {
      this.statusColor = 'red';
      this.status = 'An error occurred... Please try again!';
      this.formDisabled = false;
    });
    console.log(value, valid);
  }
}
