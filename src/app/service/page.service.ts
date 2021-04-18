import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page, PageTree } from '../model';

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

  private _currentPageTree = PageTree.TreeLeftRight;
  public get currentPageTree() {
    return this._currentPageTree;
  }
  public set currentPageTree(value) {
    this._currentPageTree = value;
    // this.sidebarVisible = false;
    this.router.navigate([], {
      queryParams: {
        ...this.route.snapshot.queryParams,
        p: Page.PageTree,
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
    // this.sidebarVisible = false;
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
    if (s && (<any>Object).values(Page).includes(s)) {
      this._currentPage = s;
    } else {
      this.currentPage = Page.Profile;
    }
  }

  private fetchCurrentSubPage() {
    let s = this.route.snapshot.queryParams['sp'];
    if (s && (<any>Object).values(Page).includes(s)) {
      this._currentPageTree = s;
    } else {
      this.currentPageTree = PageTree.TreeLeftRight;
    }
  }
}
