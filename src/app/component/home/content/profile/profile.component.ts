import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { ECharts } from 'echarts/core';
import { CustomSeriesOption, EChartsOption } from 'echarts/types/dist/shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  chartOptions: CustomSeriesOption;
  @ViewChild('chart') chart: ElementRef;
  width = 0;
  constructor() { }
  ngAfterViewInit(): void {
    if (this.chart && this.chart.nativeElement) {
      this.width = this.chart.nativeElement.clientWidth;
      setTimeout(() => {
        this.getOptions();
      })
    }
  }

  ngOnInit(): void {
  }
  onChartClick(event) {
    console.log(event);
  }

  renderItem = (params, api) => {
    let categoryIndex = api.value(0);
    let start = api.coord([api.value(1), categoryIndex]);
    let end = api.coord([api.value(2), categoryIndex]);
    let height = 10;//api.size([0, 1])[1] * 0.6;

    let isOutline = (api.value(4) === 'all');
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

    let style = {};
    if (isOutline) {
      rectShape = echarts.graphic.clipRectByRect(
        {
          x: params.coordSys.x,
          y: start[1] - height / 2,
          width: params.coordSys.width,
          height: height,
        },
        {
          x: params.coordSys.x,
          y: params.coordSys.y,
          width: params.coordSys.width,
          height: params.coordSys.height,
        }
      );
      style = { ...api.style(), stroke: 'black', lineWidth: 1, fill: '#00000000' };
    } else {
      style = { ...api.style() };
    }
    return (
      rectShape && {
        type: 'rect',
        transition: ['shape'],
        shape: rectShape,
        style: style,
      }
    );
  }

  min = 0;
  max = 0;
  getOptions() {
    let data = [];
    let dataCount = 10;
    let startTime = +new Date();
    let categories = [];
    for (let i = 0; i < 10; i++) {
      categories.push(`category-${i}`);
    }
    let types = [
      { name: 'JS Heap', color: '#7b9ce1' },
      { name: 'Documents', color: '#bd6d6c' },
      { name: 'Nodes', color: '#75d874' },
      { name: 'Listeners', color: '#e0bc78' },
      { name: 'GPU Memory', color: '#dc77dc' },
      { name: 'GPU', color: '#72b362' },
    ];

    this.min = startTime;
    // Generate mock data
    categories.forEach((category, index) => {
      let baseTime = startTime;
      data.push({
        name: category,
        value: [index, startTime, startTime + 10233, 10233, 'all'],
      });
      for (let i = 0; i < dataCount; i++) {
        let typeItem = types[Math.round(Math.random() * (types.length - 1))];
        let duration = Math.round(Math.random() * 10000);
        data.push({
          name: typeItem.name,
          value: [index, baseTime, (baseTime += duration), duration],
          itemStyle: {
            color: typeItem.color,
          },
        });
        if (this.max < baseTime + duration) {
          this.max = baseTime + duration;
        }
        baseTime += Math.round(Math.random() * 2000);
      }
    });

    let diff = this.max - this.min;
    let count = Math.floor(diff / 10);
    let xData = [];
    for (let i = 0; i < count; i++) {
      xData.push(10 * i);
    }
    this.chartOptions = {
      backgroundColor: '#ffffff',
      tooltip: {
        formatter: (params) => {
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
          top: "85%",
          labelFormatter: '',
        },
        {
          type: 'inside',
          filterMode: 'weakFilter',
        },
      ],
      grid: {
        height: "70%"
      },
      xAxis: {
        // type: 'category',
        // data: xData,
        splitArea: { show: true },
        min: this.min,
        max: this.max,
        interval: 10,
        // splitNumber: 5,
        scale: true,
        axisTick: {
          show: 'auto',
          inside: true,
          lineStyle: {
            color: 'red',
            width: 1
          },
          length: 1,
        },
        axisLabel: {
          rotate: 45,
          formatter: function (val) {
            if ((val - startTime) % 10000 === 0) {
              return Math.max(0, val - startTime) + ' ms';
            }
           
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
            opacity: 0.9,
            stroke: 'red'
          },
          encode: {
            x: [1, 2],
            y: 0,
          },
          data: data,
        },
      ],
    } as any;
  }
}
