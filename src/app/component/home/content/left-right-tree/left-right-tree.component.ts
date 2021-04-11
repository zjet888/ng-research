import { Component, OnInit } from '@angular/core';
import { CustomSeriesOption } from 'echarts';
import { ECharts } from 'echarts/core';
import { MockService } from 'src/app/service/mock.service';
import { AutoCleaner } from 'src/app/utility';

@Component({
  selector: 'app-left-right-tree',
  templateUrl: './left-right-tree.component.html',
  styleUrls: ['./left-right-tree.component.scss'],
})
export class LeftRightTreeComponent extends AutoCleaner implements OnInit {
  option: any;
  data;
  echartsInstance: ECharts;
  constructor(private mock: MockService) {
    super();
  }

  onChartClick(event) {
    console.log(event);
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  createOption() {
    if (!this.data) {
      return;
    }
 
    this.option = {
      backgroundColor: '#ffffff',
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      series: [
        {
          type: 'tree',

          data: [this.data],

          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',

          symbolSize: 7,

          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9,
          },

          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
            },
          },

          emphasis: {
            focus: 'descendant',
          },

          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    };
  }

  ngOnInit(): void {
    if(this.echartsInstance) {
      this.echartsInstance.showLoading();
    }
    let sub = this.mock.loadTreeData1().subscribe((d) => {
      this.data = d;
      this.createOption();
      this.echartsInstance.hideLoading();
    });
    this.subs.push(sub);
  }
}
