import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingDayComponent } from './wedding-day.component';

describe('WeddingDayComponent', () => {
  let component: WeddingDayComponent;
  let fixture: ComponentFixture<WeddingDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
