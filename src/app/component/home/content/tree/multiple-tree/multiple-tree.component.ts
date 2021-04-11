import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { BaseTreeComponent } from '../base-tree.component';

@Component({
  selector: 'app-multiple-tree',
  templateUrl: '../left-right-tree/left-right-tree.component.html',
  styleUrls: ['./multiple-tree.component.scss'],
})
export class MultipleTreeComponent extends BaseTreeComponent {
  ngOnInit() {
    if (this.echartsInstance) {
      this.echartsInstance.showLoading();
    }
    let sub = forkJoin([
      this.mock.loadTreeData1(),
      this.mock.loadTreeData2(),
    ]).subscribe((data: any[]) => {
      this.data = data[0];
      this.data2 = data[1];
      this.data.children.forEach((datum, index) => {
        datum.collapsed = true;
      });
      this.data2.children.forEach((datum, index) => {
        datum.collapsed = true;
      });
      this.createOption();
      if (this.echartsInstance) {
        this.echartsInstance.hideLoading();
      }
    });
    this.subs.push(sub);
  }

  data2: any;
  createOption() {
    if (!this.data) {
      return;
    }
    this.option = {
      backgroundColor: '#fff',
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [
          {
            name: 'tree1',
            icon: 'rectangle',
          },
          {
            name: 'tree2',
            icon: 'rectangle',
          },
        ],
        borderColor: '#c23531',
      },
      series: [
        {
          type: 'tree',

          name: 'tree1',

          data: [this.data],

          top: '5%',
          left: '7%',
          bottom: '2%',
          right: '60%',

          symbolSize: 7,

          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
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
        {
          type: 'tree',
          name: 'tree2',
          data: [this.data2],

          top: '20%',
          left: '60%',
          bottom: '22%',
          right: '18%',

          symbolSize: 7,

          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
          },

          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
            },
          },

          expandAndCollapse: true,

          emphasis: {
            focus: 'descendant',
          },

          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    };
  }
}
