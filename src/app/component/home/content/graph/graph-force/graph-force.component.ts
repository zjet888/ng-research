import { Component, OnInit } from '@angular/core';
import { GraphBaseComponent } from '../graph-base/graph-base.component';

@Component({
  selector: 'app-graph-force',
  templateUrl: '../graph-base/graph-base.component.html',
  styleUrls: ['../graph-base/graph-base.component.scss'],
})
export class GraphForceComponent extends GraphBaseComponent implements OnInit {
  loadData() {
    let sub = this.mock.loadGraphData1().subscribe((graph: any) => {
      graph.nodes.forEach((node) => {
        node.symbolSize = 5;
      });

      this.option = {
        title: {
          text: 'Les Miserables',
          subtext: 'Default layout',
          top: 'bottom',
          left: 'right',
        },
        tooltip: {},
        legend: [
          {
            // selectedMode: 'single',
            data: graph.categories.map(function (a) {
              return a.name;
            }),
          },
        ],
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'force',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              position: 'right',
            },
            force: {
              repulsion: 100,
            },
          },
        ],
      };
    });
    this.subs.push(sub);
  }
}
