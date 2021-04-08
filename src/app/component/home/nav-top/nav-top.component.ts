import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    let s = localStorage.getItem(CURRENT_LANG);
    if(s){
      this.selectedLang = s;
    }
  }

  onChange() {
    this.translate.use(this.selectedLang);
    localStorage.setItem(CURRENT_LANG, this.selectedLang);
  }
}
