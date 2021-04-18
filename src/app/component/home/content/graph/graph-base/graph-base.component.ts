import { Component, OnInit } from '@angular/core';
import { ECharts } from 'echarts';
import { MockService } from 'src/app/service/mock.service';
import { AutoCleaner } from 'src/app/utility';

@Component({
  selector: 'app-graph-base',
  templateUrl: './graph-base.component.html',
  styleUrls: ['./graph-base.component.scss'],
})
export class GraphBaseComponent extends AutoCleaner implements OnInit {
  option: any;
  data;
  echartsInstance: ECharts;
  constructor(public mock: MockService) {
    super();
  }

  onChartClick(event) {
    console.log(event);
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  private createNodes(count) {
    let nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        id: i,
      });
    }
    return nodes;
  }

  private createEdges(count) {
    let edges = [];
    if (count === 2) {
      return [[0, 1]];
    }
    for (let i = 0; i < count; i++) {
      edges.push([i, (i + 1) % count]);
    }
    return edges;
  }

  createOption() {
    if (!this.data) {
      return;
    }

    this.option = {
      backgroundColor: '#fff',
      series: this.data.map(function (item, idx) {
        return {
          type: 'graph',
          layout: 'force',
          animation: false,
          data: item.nodes,
          left: (idx % 4) * 25 + '%',
          top: Math.floor(idx / 4) * 25 + '%',
          width: '25%',
          height: '25%',
          force: {
            // initLayout: 'circular'
            // gravity: 0
            repulsion: 60,
            edgeLength: 2,
          },
          edges: item.edges.map(function (e) {
            return {
              source: e[0],
              target: e[1],
            };
          }),
        };
      }),
    };
  }

  ngOnInit(): void {
    if (this.echartsInstance) {
      this.echartsInstance.showLoading();
    }
    this.loadData();
  }

  private loadData() {
    this.data = [];
    for (let i = 0; i < 16; i++) {
      this.data.push({
        nodes: this.createNodes(i + 2),
        edges: this.createEdges(i + 2),
      });
    }
    this.createOption();
    if (this.echartsInstance) {
      this.echartsInstance.hideLoading();
    }
  }
}
