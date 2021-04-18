import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLifeExpectancyComponent } from './graph-life-expectancy.component';

describe('GraphLifeExpectancyComponent', () => {
  let component: GraphLifeExpectancyComponent;
  let fixture: ComponentFixture<GraphLifeExpectancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphLifeExpectancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphLifeExpectancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
