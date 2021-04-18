import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCartesianComponent } from './graph-cartesian.component';

describe('GraphCartesianComponent', () => {
  let component: GraphCartesianComponent;
  let fixture: ComponentFixture<GraphCartesianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCartesianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCartesianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
