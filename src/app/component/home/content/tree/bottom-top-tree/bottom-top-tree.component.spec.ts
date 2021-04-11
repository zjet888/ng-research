import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTopTreeComponent } from './bottom-top-tree.component';

describe('BottomTopTreeComponent', () => {
  let component: BottomTopTreeComponent;
  let fixture: ComponentFixture<BottomTopTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomTopTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomTopTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
