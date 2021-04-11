import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../model';

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

  private _currentPage = Page.Profile;
  public get currentPage() {
    return this._currentPage;
  }
  public set currentPage(value) {
    this._currentPage = value;
    this.sidebarVisible = false;
    this.router.navigate([], { queryParams: { p: value } });
  }
  constructor(private router: Router, private route: ActivatedRoute) {
    let s = this.route.snapshot.queryParams['p'];
    if (s && (<any>Object).values(Page).includes(s)) {
      this._currentPage = s;
    } else {
      this.currentPage = Page.Profile;
    }
  }
}
