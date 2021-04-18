import { Component, OnInit } from '@angular/core';
import { PageTree } from 'src/app/model';
import { PageService } from 'src/app/service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  constructor(private page: PageService) {}

  ngOnInit(): void {}
  get isTreeLeftRight() {
    return this.page.currentPageTree === PageTree.TreeLeftRight;
  }
  get isTreeRightLeft() {
    return this.page.currentPageTree === PageTree.TreeRightLeft;
  }
  get isTreeBottomTop() {
    return this.page.currentPageTree === PageTree.TreeBottomTop;
  }
  get isTreeMultiple() {
    return this.page.currentPageTree === PageTree.TreeMultiple;
  }
  get isTreeRadial() {
    return this.page.currentPageTree === PageTree.TreeRadial;
  }
  get isTreePolyline() {
    return this.page.currentPageTree === PageTree.TreePolyline;
  }
  get isTreeTopBottom() {
    return this.page.currentPageTree === PageTree.TreeTopBottom;
  }
}
