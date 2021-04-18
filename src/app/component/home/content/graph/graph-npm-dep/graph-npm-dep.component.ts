import { Component, OnInit } from '@angular/core';
import { GraphBaseComponent } from '../graph-base/graph-base.component';

@Component({
  selector: 'app-graph-npm-dep',
  templateUrl: '../graph-base/graph-base.component.html',
  styleUrls: ['../graph-base/graph-base.component.scss'],
})
export class GraphNpmDepComponent extends GraphBaseComponent implements OnInit {
  loadData() {
    let sub = this.mock.loadGraphData4().subscribe((json: any) => {
      this.option = {
        title: {
          text: 'NPM Dependencies',
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            // progressiveThreshold: 700,
            data: json.nodes.map(function (node) {
              return {
                x: node.x,
                y: node.y,
                id: node.id,
                name: node.label,
                symbolSize: node.size,
                itemStyle: {
                  color: node.color,
                },
              };
            }),
            edges: json.edges.map(function (edge) {
              return {
                source: edge.sourceID,
                target: edge.targetID,
              };
            }),
            emphasis: {
              focus: 'adjacency',
              label: {
                position: 'right',
                show: true,
              },
            },
            roam: true,
            lineStyle: {
              width: 0.5,
              curveness: 0.3,
              opacity: 0.7,
            },
          },
        ],
      };
    });
    this.subs.push(sub);
  }
}
