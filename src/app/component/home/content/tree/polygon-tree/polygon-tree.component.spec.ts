import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonTreeComponent } from './polygon-tree.component';

describe('PolygonTreeComponent', () => {
  let component: PolygonTreeComponent;
  let fixture: ComponentFixture<PolygonTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolygonTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
