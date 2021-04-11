import { Component, OnInit } from '@angular/core';
import { BaseTreeComponent } from '../base-tree.component';

@Component({
  selector: 'app-bottom-top-tree',
  templateUrl: '../left-right-tree/left-right-tree.component.html',
  styleUrls: ['./bottom-top-tree.component.scss'],
})
export class BottomTopTreeComponent extends BaseTreeComponent {
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

          left: '2%',
          right: '2%',
          top: '20%',
          bottom: '8%',

          symbol: 'emptyCircle',

          orient: 'BT',

          expandAndCollapse: true,

          label: {
            position: 'bottom',
            rotate: 90,
            verticalAlign: 'middle',
            align: 'right',
          },

          leaves: {
            label: {
              position: 'top',
              rotate: 90,
              verticalAlign: 'middle',
              align: 'left',
            },
          },

          emphasis: {
            focus: 'descendant',
          },

          animationDurationUpdate: 750,
        },
      ],
    };
  }
}
