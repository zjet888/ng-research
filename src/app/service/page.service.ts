import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page, PageGraph, PageTree } from '../model';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private _sidebarVisible = false;
  public get sidebarVisible() {
    return this._sidebarVisible;
  }
  public set sidebarVisible(value) {
    this._sidebarVisible = value;
  }

  private _currentSubpage: PageTree | PageGraph = PageTree.TreeLeftRight;
  public get currentSubPage() {
    return this._currentSubpage;
  }
  public set currentSubPage(value) {
    this._currentSubpage = value;
    this.router.navigate([], {
      queryParams: {
        ...this.route.snapshot.queryParams,
        p: this._currentPage,
        sp: value,
      },
    });
  }

  private _currentPage = Page.Profile;
  public get currentPage() {
    return this._currentPage;
  }
  public set currentPage(value) {
    this._currentPage = value;
    this.router.navigate([], {
      queryParams: { ...this.route.snapshot.queryParams, p: value },
    });
  }
  constructor(private router: Router, private route: ActivatedRoute) {
    this.fetchCurrentPage();
    this.fetchCurrentSubPage();
  }

  private fetchCurrentPage() {
    let s = this.route.snapshot.queryParams['p'];

    if (s && Object.values(Page).includes(s)) {
      this._currentPage = s;
    } else {
      this.currentPage = Page.Profile;
    }
  }

  private fetchCurrentSubPage() {
    let s = this.route.snapshot.queryParams['sp'];
    let values = Object.values(PageTree);
    let values1 = Object.values(PageGraph);
    let valuesTotal = [...values, ...values1];
    if (s && valuesTotal.includes(s)) {
      this._currentSubpage = s;
    } else {
      this.currentSubPage = PageTree.TreeLeftRight;
    }
  }
}
