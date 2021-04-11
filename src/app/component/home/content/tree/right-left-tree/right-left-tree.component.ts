import { Component, OnInit } from '@angular/core';
import { BaseTreeComponent } from '../base-tree.component';

@Component({
  selector: 'app-right-left-tree',
  templateUrl: '../left-right-tree/left-right-tree.component.html',
  styleUrls: ['./right-left-tree.component.scss'],
})
export class RightLeftTreeComponent extends BaseTreeComponent {
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

      series: [
        {
          type: 'tree',

          data: [this.data],

          top: '1%',
          left: '15%',
          bottom: '1%',
          right: '7%',

          symbolSize: 7,

          orient: 'RL',

          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left',
          },

          leaves: {
            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
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
}
