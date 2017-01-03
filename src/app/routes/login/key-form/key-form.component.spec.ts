/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KeyFormComponent } from './key-form.component';

describe('KeyFormComponent', () => {
  let component: KeyFormComponent;
  let fixture: ComponentFixture<KeyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
