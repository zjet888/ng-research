import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLesMiserable1Component } from './graph-les-miserable1.component';

describe('GraphLesMiserable1Component', () => {
  let component: GraphLesMiserable1Component;
  let fixture: ComponentFixture<GraphLesMiserable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphLesMiserable1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphLesMiserable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
