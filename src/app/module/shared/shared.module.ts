import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { AutoCleaner, EN } from 'src/app/utility';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [CommonModule, HttpClientModule, TranslateModule]
})
export class SharedModule extends AutoCleaner {
  constructor(private translate: TranslateService, private title: Title) {
    super();
    this.translate.use(EN);
    let sub = this.translate.onLangChange.subscribe(d => {
      this.title.setTitle(this.translate.instant('title'));
    });
    this.subs.push(sub);
    this.title.setTitle(this.translate.instant('title'));
  }
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}