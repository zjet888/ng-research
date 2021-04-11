import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftRightTreeComponent } from './left-right-tree.component';

describe('LeftRightTreeComponent', () => {
  let component: LeftRightTreeComponent;
  let fixture: ComponentFixture<LeftRightTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftRightTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftRightTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
