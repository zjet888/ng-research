import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTreeComponent } from './multiple-tree.component';

describe('MultipleTreeComponent', () => {
  let component: MultipleTreeComponent;
  let fixture: ComponentFixture<MultipleTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
