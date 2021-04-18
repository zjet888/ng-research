import { Component, OnInit } from '@angular/core';
import { PageGraph } from 'src/app/model';
import { PageService } from 'src/app/service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  constructor(private page: PageService) {}

  ngOnInit(): void {}

  get Calendar() {
    return this.page.currentSubPage === PageGraph.Calendar;
  }

  get WebkitDep() {
    return this.page.currentSubPage === PageGraph.WebkitDep;
  }
  get Cartesian() {
    return this.page.currentSubPage === PageGraph.Cartesian;
  }
  get Dynamic() {
    return this.page.currentSubPage === PageGraph.Dynamic;
  }
  get ForceLayout() {
    return this.page.currentSubPage === PageGraph.ForceLayout;
  }
  get ForceLayout1() {
    return this.page.currentSubPage === PageGraph.ForceLayout1;
  }
  get HideOverlappedLabel() {
    return this.page.currentSubPage === PageGraph.HideOverlappedLabel;
  }
  get LesMiserables() {
    return this.page.currentSubPage === PageGraph.LesMiserables;
  }
  get LesMiserables1() {
    return this.page.currentSubPage === PageGraph.LesMiserables1;
  }
  get LifeExpectancy() {
    return this.page.currentSubPage === PageGraph.LifeExpectancy;
  }
  get NpmDep() {
    return this.page.currentSubPage === PageGraph.NpmDep;
  }
  get SimpleGraph() {
    return this.page.currentSubPage === PageGraph.SimpleGraph;
  }
 
}
