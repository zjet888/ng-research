import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphForce1Component } from './graph-force1.component';

describe('GraphForce1Component', () => {
  let component: GraphForce1Component;
  let fixture: ComponentFixture<GraphForce1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphForce1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphForce1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
