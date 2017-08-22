import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendActivitiesComponent } from './weekend-activities.component';

describe('WeekendActivitiesComponent', () => {
  let component: WeekendActivitiesComponent;
  let fixture: ComponentFixture<WeekendActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekendActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekendActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
