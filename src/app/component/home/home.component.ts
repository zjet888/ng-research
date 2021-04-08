import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public page: PageService) { }

  ngOnInit(): void {
  }

}
