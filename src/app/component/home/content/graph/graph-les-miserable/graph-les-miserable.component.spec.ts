import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLesMiserableComponent } from './graph-les-miserable.component';

describe('GraphLesMiserableComponent', () => {
  let component: GraphLesMiserableComponent;
  let fixture: ComponentFixture<GraphLesMiserableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphLesMiserableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphLesMiserableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
