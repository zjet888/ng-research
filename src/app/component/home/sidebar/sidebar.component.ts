import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/model';
import { PageService } from 'src/app/service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  selectedOption = Page.Profile;
  options = [{label: Page.Profile, value: Page.Profile, id: Page.Profile, icon: "pi pi-ticket"}];
  constructor(public page: PageService) { }

  ngOnInit(): void {
  }

}
