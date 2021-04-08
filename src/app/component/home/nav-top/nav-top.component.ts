import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PageService } from 'src/app/service/page.service';
import { CURRENT_LANG, EN, ZH } from 'src/app/utility';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {

  langs = [{ label: 'English', value: EN },
  { label: '中文', value: ZH }];
  selectedLang = EN;
  public get sidebarVisible() {
    return this.page.sidebarVisible;
  }
  public set sidebarVisible(value) {
    this.page.sidebarVisible = value;
  }
  constructor(private translate: TranslateService, private page: PageService) { }

  ngOnInit(): void {
    let s = localStorage.getItem(CURRENT_LANG);
    if (s) {
      this.selectedLang = s;
    }
  }

  onChange() {
    this.translate.use(this.selectedLang);
    localStorage.setItem(CURRENT_LANG, this.selectedLang);
  }
}
