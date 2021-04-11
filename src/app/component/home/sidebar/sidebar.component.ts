import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/model';
import { PageService } from 'src/app/service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public get selectedOption() {
    return this.page.currentPage;
  }
  public set selectedOption(value) {
    this.page.currentPage = value;
  }
  options = [{ label: Page.Profile, value: Page.Profile, id: Page.Profile, icon: "pi pi-ticket" },
  { label: Page.Tree1, value: Page.Tree1, id: Page.Tree1, icon: "pi pi-sitemap" }];
  constructor(public page: PageService) { }

  ngOnInit(): void {
  }

}
