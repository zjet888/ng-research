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
    return this.page.currentSubPage === PageTree.TreeLeftRight;
  }
  get isTreeRightLeft() {
    return this.page.currentSubPage === PageTree.TreeRightLeft;
  }
  get isTreeBottomTop() {
    return this.page.currentSubPage === PageTree.TreeBottomTop;
  }
  get isTreeMultiple() {
    return this.page.currentSubPage === PageTree.TreeMultiple;
  }
  get isTreeRadial() {
    return this.page.currentSubPage === PageTree.TreeRadial;
  }
  get isTreePolyline() {
    return this.page.currentSubPage === PageTree.TreePolyline;
  }
  get isTreeTopBottom() {
    return this.page.currentSubPage === PageTree.TreeTopBottom;
  }
}
