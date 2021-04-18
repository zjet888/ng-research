import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphHideLabelComponent } from './graph-hide-label.component';

describe('GraphHideLabelComponent', () => {
  let component: GraphHideLabelComponent;
  let fixture: ComponentFixture<GraphHideLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphHideLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphHideLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
