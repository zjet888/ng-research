import { Component, OnInit } from '@angular/core';
import { BaseTreeComponent } from '../base-tree.component';

@Component({
  selector: 'app-top-bottom-tree',
  templateUrl: '../left-right-tree/left-right-tree.component.html',
  styleUrls: ['./top-bottom-tree.component.scss'],
})
export class TopBottomTreeComponent extends BaseTreeComponent {}
