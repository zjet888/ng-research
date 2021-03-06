import { Component, OnInit } from '@angular/core';
import { GraphBaseComponent } from '../graph-base/graph-base.component';

@Component({
  selector: 'app-graph-cartesian',
  templateUrl: '../graph-base/graph-base.component.html',
  styleUrls: ['../graph-base/graph-base.component.scss'],
})
export class GraphCartesianComponent
  extends GraphBaseComponent
  implements OnInit {
  protected loadData() {
    this.createOption();
  }

  createOption() {
    let data = [];
    let axisData = [
      '周一',
      '周二',
      '周三',
      '很长很长的周四',
      '周五',
      '周六',
      '周日',
    ];
    data = axisData.map(function (item, i) {
      return Math.round(Math.random() * 1000 * (i + 1));
    });
    let links = data.map(function (item, i) {
      return {
        source: i,
        target: i + 1,
      };
    });
    links.pop();
    if (this.echartsInstance) {
      this.echartsInstance.hideLoading();
    }
    this.option = {
      backgroundColor: '#fff',
      title: {
        text: '笛卡尔坐标系上的 Graph',
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: axisData,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'graph',
          layout: 'none',
          coordinateSystem: 'cartesian2d',
          symbolSize: 40,
          label: {
            show: true,
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          data: data,
          links: links,
          lineStyle: {
            color: '#2f4554',
          },
        },
      ],
    };
  }
}
