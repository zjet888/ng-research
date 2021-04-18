import { Component, OnInit } from '@angular/core';
import { GraphBaseComponent } from '../graph-base/graph-base.component';

@Component({
  selector: 'app-graph-life-expectancy',
  templateUrl: '../graph-base/graph-base.component.html',
  styleUrls: ['../graph-base/graph-base.component.scss'],
})
export class GraphLifeExpectancyComponent
  extends GraphBaseComponent
  implements OnInit {
  loadData() {
    let sub = this.mock.loadGraphData2().subscribe((data: any) => {
      let series = data.series;
      let option = {
        visualMap: {
          show: false,
          min: 0,
          max: 100,
          dimension: 1,
        },
        legend: {
          data: data.counties,
          selectedMode: 'single',
          right: 100,
        },
        grid: {
          left: 0,
          bottom: 0,
          containLabel: true,
          top: 80,
        },
        xAxis: {
          type: 'value',
        },
        yAxis: {
          type: 'value',
          scale: true,
        },
        toolbox: {
          feature: {
            dataZoom: {},
          },
        },
        dataZoom: {
          type: 'inside',
        },
        series: [],
      };

      data.counties.forEach(function (country) {
        let data = series.map(function (yearData) {
          let item = yearData.filter(function (item) {
            return item[3] === country;
          })[0];
          return {
            label: {
              show: item[4] % 20 === 0 && item[4] > 1940,
              position: 'top',
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            name: item[4],
            value: item,
          };
        });
        let links = data.map(function (item, idx) {
          return {
            source: idx,
            target: idx + 1,
          };
        });
        links.pop();

        option.series.push({
          name: country,
          type: 'graph',
          coordinateSystem: 'cartesian2d',
          data: data,
          links: links,
          edgeSymbol: ['none', 'arrow'],
          edgeSymbolSize: 5,
          legendHoverLink: false,
          lineStyle: {
            color: '#333',
          },
          itemStyle: {
            borderWidth: 1,
            borderColor: '#333',
          },
          label: {
            color: '#333',
            position: 'right',
          },
          symbolSize: 10,
          animationDelay: function (idx) {
            return idx * 100;
          },
        });
      });
      this.option = option;
    });
    this.subs.push(sub);
  }
}
