import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { KeyForm } from './key-form.model';

@Component({
  selector: 'tam-key-form',
  templateUrl: './key-form.component.html',
  styleUrls: ['./key-form.component.scss']
})
export class KeyFormComponent implements OnInit {
  keyForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.keyForm = KeyForm.getFormGroup();
  }

  submitKey({ value, valid }: { value: KeyForm, valid: boolean }) {
    console.log(value, valid);
  }

}
