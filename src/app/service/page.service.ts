import { Injectable } from '@angular/core';
import { Page } from '../model';

@Injectable({
  providedIn: 'root'
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
  }
  constructor() { }
}
