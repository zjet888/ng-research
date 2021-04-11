import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/model';
import { PageService } from 'src/app/service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public get selectedOption() {
    return this.page.currentPage;
  }
  public set selectedOption(value) {
    this.page.currentPage = value;
  }
  options = [
    {
      label: Page.Profile,
      value: Page.Profile,
      id: Page.Profile,
      icon: 'pi pi-ticket',
    },
    {
      label: Page.TreeLeftRight,
      value: Page.TreeLeftRight,
      id: Page.TreeLeftRight,
      icon: 'pi pi-sitemap',
    },
    {
      label: Page.TreeRightLeft,
      value: Page.TreeRightLeft,
      id: Page.TreeRightLeft,
      icon: 'pi pi-sitemap',
    },
    {
      label: Page.TreeTopBottom,
      value: Page.TreeTopBottom,
      id: Page.TreeTopBottom,
      icon: 'pi pi-sitemap',
    },
    {
      label: Page.TreeBottomTop,
      value: Page.TreeBottomTop,
      id: Page.TreeBottomTop,
      icon: 'pi pi-sitemap',
    },
    {
      label: Page.TreeMultiple,
      value: Page.TreeMultiple,
      id: Page.TreeMultiple,
      icon: 'pi pi-sitemap',
    },
    {
      label: Page.TreeRadial,
      value: Page.TreeRadial,
      id: Page.TreeRadial,
      icon: 'pi pi-sitemap',
    },
    {
      label: Page.TreePolyline,
      value: Page.TreePolyline,
      id: Page.TreePolyline,
      icon: 'pi pi-sitemap',
    },
  ];
  constructor(public page: PageService) {}

  ngOnInit(): void {}
}
