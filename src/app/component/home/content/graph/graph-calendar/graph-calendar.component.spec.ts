import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCalendarComponent } from './graph-calendar.component';

describe('GraphCalendarComponent', () => {
  let component: GraphCalendarComponent;
  let fixture: ComponentFixture<GraphCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
