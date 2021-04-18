import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Page, PageGraph, PageTree } from 'src/app/model';
import { PageService } from 'src/app/service';
import { AutoCleaner } from 'src/app/utility';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent extends AutoCleaner implements OnInit {
  getPageTreeItem() {
    let values = Object.values(PageTree);
    let items = values.map((x) => {
      return {
        label: x,
        id: x,
        icon: 'pi pi-sitemap',
        command: (event) => this.click(Page.PageTree, x),
      };
    });
    return items;
  }

  getPageGraphItem() {
    let values = Object.values(PageGraph);
    let items = values.map((x) => {
      return {
        label: x,
        id: x,
        icon: 'pi pi-share-alt',
        command: (event) => this.click(Page.Graph, x),
      };
    });
    return items;
  }

  click(page: Page, sub: PageTree | PageGraph = null): void {
    this.page.currentPage = page;
    if (sub) {
      this.page.currentSubPage = sub;
    }
  }

  options: MenuItem[] = [
    {
      label: Page.Profile,
      id: Page.Profile,
      icon: 'pi pi-ticket',
      command: (event) => this.click(Page.Profile),
      expanded: this.checkExpanded(Page.Profile),
    },
    {
      label: Page.PageTree,
      id: Page.PageTree,
      icon: 'pi pi-sitemap',
      command: (event) => this.click(Page.PageTree, PageTree.TreeLeftRight),
      expanded: this.checkExpanded(Page.PageTree),
      items: this.getPageTreeItem(),
    },
    {
      label: Page.Graph,
      id: Page.Graph,
      icon: 'pi pi-share-alt',
      command: (event) => this.click(Page.Graph, PageGraph.ForceLayout),
      expanded: this.checkExpanded(Page.Graph),
      items: this.getPageGraphItem(),
    },
  ];

  constructor(public page: PageService, private translate: TranslateService) {
    super();
    let sub = this.translate.onLangChange.subscribe((d) => {
      this.loadOptions();
    });
    this.subs.push(sub);
  }

  private loadOptions() {
    this.options.forEach((x) => {
      x.label = this.translate.instant(x.id);
      if (x && x.items) {
        x.items.forEach((y) => {
          y.label = this.translate.instant(y.id);
        });
      }
    });
    this.options = [...this.options];
  }

  ngOnInit(): void {
    this.loadOptions();
  }

  checkExpanded(item: Page) {
    return this.page.currentPage === item;
  }
}
