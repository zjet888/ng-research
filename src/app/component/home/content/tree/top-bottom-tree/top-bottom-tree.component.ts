import { Component, OnInit } from '@angular/core';
import { BaseTreeComponent } from '../base-tree.component';

@Component({
  selector: 'app-top-bottom-tree',
  templateUrl: '../left-right-tree/left-right-tree.component.html',
  styleUrls: ['./top-bottom-tree.component.scss'],
})
export class TopBottomTreeComponent extends BaseTreeComponent {
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
          top: '8%',
          bottom: '20%',

          symbol: 'emptyCircle',

          orient: 'vertical',

          expandAndCollapse: true,

          label: {
            position: 'top',
            rotate: -90,
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9,
          },

          leaves: {
            label: {
              position: 'bottom',
              rotate: -90,
              verticalAlign: 'middle',
              align: 'left',
            },
          },

          animationDurationUpdate: 750,
        },
      ],
    };
  }
}
