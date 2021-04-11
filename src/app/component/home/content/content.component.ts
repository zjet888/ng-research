import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/model';
import { PageService } from 'src/app/service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor(private page: PageService) {}

  ngOnInit(): void {}

  get isProfile() {
    return this.page.currentPage === Page.Profile;
  }
  get isTreeLeftRight() {
    return this.page.currentPage === Page.TreeLeftRight;
  }
  get isTreeBottomTop() {
    return this.page.currentPage === Page.TreeBottomTop;
  }
  get isTreeMultiple() {
    return this.page.currentPage === Page.TreeMultiple;
  }
  get isTreeRadial() {
    return this.page.currentPage === Page.TreeRadial;
  }
  get isTreeTopBottom() {
    return this.page.currentPage === Page.TreeTopBottom;
  }
}
