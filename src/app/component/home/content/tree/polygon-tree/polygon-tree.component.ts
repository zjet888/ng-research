import { Component, OnInit } from '@angular/core';
import { BaseTreeComponent } from '../base-tree.component';

@Component({
  selector: 'app-polygon-tree',
  templateUrl: '../left-right-tree/left-right-tree.component.html',
  styleUrls: ['./polygon-tree.component.scss'],
})
export class PolygonTreeComponent extends BaseTreeComponent {}
