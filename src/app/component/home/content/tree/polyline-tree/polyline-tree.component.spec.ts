import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolylineTreeComponent } from './polyline-tree.component';

describe('PolylineTreeComponent', () => {
  let component: PolylineTreeComponent;
  let fixture: ComponentFixture<PolylineTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolylineTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolylineTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
