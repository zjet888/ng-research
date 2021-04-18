import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphWebkitDepComponent } from './graph-webkit-dep.component';

describe('GraphWebkitDepComponent', () => {
  let component: GraphWebkitDepComponent;
  let fixture: ComponentFixture<GraphWebkitDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphWebkitDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphWebkitDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
