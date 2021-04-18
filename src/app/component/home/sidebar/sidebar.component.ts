import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Page, PageTree } from 'src/app/model';
import { PageService } from 'src/app/service';
import { AutoCleaner } from 'src/app/utility';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent extends AutoCleaner implements OnInit {
  click(page: Page, sub: PageTree = null): void {
    this.page.currentPage = page;
    if (sub) {
      this.page.currentPageTree = sub;
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
      items: [
        {
          label: PageTree.TreeLeftRight,
          id: PageTree.TreeLeftRight,
          icon: 'pi pi-sitemap',
          command: (event) => this.click(Page.PageTree, PageTree.TreeLeftRight),
        },
        {
          label: PageTree.TreeRightLeft,
          id: PageTree.TreeRightLeft,
          icon: 'pi pi-sitemap',
          command: (event) => this.click(Page.PageTree, PageTree.TreeRightLeft),
        },
        {
          label: PageTree.TreeTopBottom,
          id: PageTree.TreeTopBottom,
          icon: 'pi pi-sitemap',
          command: (event) => this.click(Page.PageTree, PageTree.TreeTopBottom),
        },
        {
          label: PageTree.TreeBottomTop,
          id: PageTree.TreeBottomTop,
          icon: 'pi pi-sitemap',
          command: (event) => this.click(Page.PageTree, PageTree.TreeBottomTop),
        },
        {
          label: PageTree.TreeMultiple,
          id: PageTree.TreeMultiple,
          icon: 'pi pi-sitemap',
          command: (event) => this.click(Page.PageTree, PageTree.TreeMultiple),
        },
        {
          label: PageTree.TreeRadial,
          id: PageTree.TreeRadial,
          icon: 'pi pi-sitemap',
          command: (event) => this.click(Page.PageTree, PageTree.TreeRadial),
        },
        {
          label: PageTree.TreePolyline,
          id: PageTree.TreePolyline,
          icon: 'pi pi-sitemap',
          command: (event) => this.click(Page.PageTree, PageTree.TreePolyline),
        },
      ],
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
