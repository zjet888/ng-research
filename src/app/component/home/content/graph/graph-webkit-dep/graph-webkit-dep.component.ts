import { Component, OnInit } from '@angular/core';
import { GraphBaseComponent } from '../graph-base/graph-base.component';

@Component({
  selector: 'app-graph-webkit-dep',
  templateUrl: '../graph-base/graph-base.component.html',
  styleUrls: ['../graph-base/graph-base.component.scss'],
})
export class GraphWebkitDepComponent
  extends GraphBaseComponent
  implements OnInit {
  loadData() {
    let sub = this.mock.loadGraphData3().subscribe((webkitDep: any) => {
      this.option = {
        legend: {
          data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other'],
        },
        series: [
          {
            type: 'graph',
            layout: 'force',
            animation: false,
            label: {
              position: 'right',
              formatter: '{b}',
            },
            draggable: true,
            data: webkitDep.nodes.map(function (node, idx) {
              node.id = idx;
              return node;
            }),
            categories: webkitDep.categories,
            force: {
              edgeLength: 5,
              repulsion: 20,
              gravity: 0.2,
            },
            edges: webkitDep.links,
          },
        ],
      };
    });
    this.subs.push(sub);
  }
}
