/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaveTheDateComponent } from './save-the-date.component';

describe('SaveTheDateComponent', () => {
  let component: SaveTheDateComponent;
  let fixture: ComponentFixture<SaveTheDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveTheDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTheDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
