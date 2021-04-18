import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphForceComponent } from './graph-force.component';

describe('GraphForceComponent', () => {
  let component: GraphForceComponent;
  let fixture: ComponentFixture<GraphForceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphForceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
