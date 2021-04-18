import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSimpleComponent } from './graph-simple.component';

describe('GraphSimpleComponent', () => {
  let component: GraphSimpleComponent;
  let fixture: ComponentFixture<GraphSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
