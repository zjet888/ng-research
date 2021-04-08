import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { EchartModule } from 'src/app/module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  chartOptions;
  constructor() {}

  ngOnInit(): void {
    this.getOptions();
  }
  onChartClick(event) {
    console.log(event);
  }

  renderItem(params, api) {
    let categoryIndex = api.value(0);
    let start = api.coord([api.value(1), categoryIndex]);
    let end = api.coord([api.value(2), categoryIndex]);
    let height = 10;//api.size([0, 1])[1] * 0.6;

    let rectShape = echarts.graphic.clipRectByRect(
      {
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height,
      },
      {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height,
      }
    );

    return (
      rectShape && {
        type: 'rect',
        transition: ['shape'],
        shape: rectShape,
        style: api.style(),
      }
    );
  }

  getOptions() {
    let data = [];
    let dataCount = 10;
    let startTime = +new Date();
    let categories = ['categoryA', 'categoryB', 'categoryC'];
    let types = [
      { name: 'JS Heap', color: '#7b9ce1' },
      { name: 'Documents', color: '#bd6d6c' },
      { name: 'Nodes', color: '#75d874' },
      { name: 'Listeners', color: '#e0bc78' },
      { name: 'GPU Memory', color: '#dc77dc' },
      { name: 'GPU', color: '#72b362' },
    ];

    // Generate mock data
    categories.forEach(function (category, index) {
      let baseTime = startTime;
      for (let i = 0; i < dataCount; i++) {
        let typeItem = types[Math.round(Math.random() * (types.length - 1))];
        let duration = Math.round(Math.random() * 10000);
        data.push({
          name: typeItem.name,
          value: [index, baseTime, (baseTime += duration), duration],
          itemStyle: {
            normal: {
              color: typeItem.color,
            },
          },
        });
        baseTime += Math.round(Math.random() * 2000);
      }
    });

    this.chartOptions = {
      backgroundColor: '#ffffff',
      tooltip: {
        formatter: function (params) {
          return params.marker + params.name + ': ' + params.value[3] + ' ms';
        },
      },
      title: {
        text: 'Profile',
        left: 'center',
      },
      dataZoom: [
        {
          type: 'slider',
          filterMode: 'weakFilter',
          showDataShadow: false,
          top: "91%",
          labelFormatter: '',
        },
        {
          type: 'inside',
          filterMode: 'weakFilter',
        },
      ],
      grid: {
      },
      xAxis: {
        min: startTime,
        scale: true,
        axisLabel: {
          formatter: function (val) {
            return Math.max(0, val - startTime) + ' ms';
          },
        },
      },
      yAxis: {
        data: categories,
      },
      series: [
        {
          type: 'custom',
          renderItem: this.renderItem,
          itemStyle: {
            opacity: 0.8,
          },
          encode: {
            x: [1, 2],
            y: 0,
          },
          data: data,
        },
      ],
    };
  }
}
