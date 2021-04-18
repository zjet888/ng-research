import { Component, OnInit } from '@angular/core';
import { GraphBaseComponent } from '../graph-base/graph-base.component';

@Component({
  selector: 'app-graph-hide-label',
  templateUrl: '../graph-base/graph-base.component.html',
  styleUrls: ['../graph-base/graph-base.component.scss'],
})
export class GraphHideLabelComponent
  extends GraphBaseComponent
  implements OnInit {
  loadData() {
    let sub = this.mock.loadGraphData1().subscribe((graph: any) => {
      graph.nodes.forEach((node) => {
        node.symbolSize = 5;
      });

      this.option = {
        tooltip: {},
        legend: [
          {
            data: graph.categories.map(function (a) {
              return a.name;
            }),
          },
        ],
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'none',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              show: true,
              position: 'right',
              formatter: '{b}',
            },
            labelLayout: {
              hideOverlap: true,
            },
            scaleLimit: {
              min: 0.4,
              max: 2,
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3,
            },
          },
        ],
      };
    });
    this.subs.push(sub);
  }
}
