import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDynamicComponent } from './graph-dynamic.component';

describe('GraphDynamicComponent', () => {
  let component: GraphDynamicComponent;
  let fixture: ComponentFixture<GraphDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
