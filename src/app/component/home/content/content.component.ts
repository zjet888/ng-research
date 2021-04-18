import { Component, OnInit } from '@angular/core';
import { Page, PageTree } from 'src/app/model';
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

  get isPageTree() {
    return this.page.currentPage === Page.PageTree;
  }
}
