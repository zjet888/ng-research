import { Component, OnInit } from '@angular/core';
import { GraphBaseComponent } from '../graph-base/graph-base.component';

@Component({
  selector: 'app-graph-dynamic',
  templateUrl: '../graph-base/graph-base.component.html',
  styleUrls: ['../graph-base/graph-base.component.scss'],
})
export class GraphDynamicComponent
  extends GraphBaseComponent
  implements OnInit {
  loadData() {
    let data = [
      {
        fixed: true,
        x: 200,
        y: 400,
        symbolSize: 20,
        id: '-1',
      },
    ];

    let edges = [];

    this.option = {
      series: [
        {
          type: 'graph',
          layout: 'force',
          animation: false,
          data: data,
          force: {
            // initLayout: 'circular'
            // gravity: 0
            repulsion: 100,
            edgeLength: 5,
          },
          edges: edges,
        },
      ],
    };

    setInterval(() => {
      data.push({
        id: data.length + '',
      } as any);
      var source = Math.round((data.length - 1) * Math.random());
      var target = Math.round((data.length - 1) * Math.random());
      if (source !== target) {
        edges.push({
          source: source,
          target: target,
        });
      }
      this.echartsInstance.setOption({
        series: [
          {
            roam: true,
            data: data,
            edges: edges,
          },
        ],
      });

      // console.log('nodes: ' + data.length);
      // console.log('links: ' + data.length);
    }, 200);
  }
}
