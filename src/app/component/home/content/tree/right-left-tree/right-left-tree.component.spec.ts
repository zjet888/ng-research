import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightLeftTreeComponent } from './right-left-tree.component';

describe('RightLeftTreeComponent', () => {
  let component: RightLeftTreeComponent;
  let fixture: ComponentFixture<RightLeftTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightLeftTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightLeftTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
