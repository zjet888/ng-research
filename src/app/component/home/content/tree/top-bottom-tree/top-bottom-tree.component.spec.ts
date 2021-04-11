import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBottomTreeComponent } from './top-bottom-tree.component';

describe('TopBottomTreeComponent', () => {
  let component: TopBottomTreeComponent;
  let fixture: ComponentFixture<TopBottomTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBottomTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBottomTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
