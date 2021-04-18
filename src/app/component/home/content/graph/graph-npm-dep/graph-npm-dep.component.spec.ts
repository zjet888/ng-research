import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphNpmDepComponent } from './graph-npm-dep.component';

describe('GraphNpmDepComponent', () => {
  let component: GraphNpmDepComponent;
  let fixture: ComponentFixture<GraphNpmDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphNpmDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphNpmDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
