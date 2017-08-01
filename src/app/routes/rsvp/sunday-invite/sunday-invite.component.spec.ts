import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SundayInviteComponent } from './sunday-invite.component';

describe('SundayInviteComponent', () => {
  let component: SundayInviteComponent;
  let fixture: ComponentFixture<SundayInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SundayInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SundayInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
