import { Component, OnInit } from '@angular/core';
import { GraphBaseComponent } from '../graph-base/graph-base.component';

@Component({
  selector: 'app-graph-les-miserable1',
  templateUrl: '../graph-base/graph-base.component.html',
  styleUrls: ['../graph-base/graph-base.component.scss'],
})
export class GraphLesMiserable1Component
  extends GraphBaseComponent
  implements OnInit {
  loadData() {
    let sub = this.mock.loadGraphData1().subscribe((graph: any) => {
     graph.nodes.forEach(function (node) {
        node.label = {
          show: node.symbolSize > 30,
        };
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
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
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
              position: 'right',
              formatter: '{b}',
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3,
            },
            emphasis: {
              focus: 'adjacency',
              lineStyle: {
                width: 10,
              },
            },
          },
        ],
      };
    });
    this.subs.push(sub);
  }
}
