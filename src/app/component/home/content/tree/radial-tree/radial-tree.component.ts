import { Component, OnInit } from '@angular/core';
import { BaseTreeComponent } from '../base-tree.component';

@Component({
  selector: 'app-radial-tree',
  templateUrl: '../left-right-tree/left-right-tree.component.html',
  styleUrls: ['./radial-tree.component.scss'],
})
export class RadialTreeComponent extends BaseTreeComponent {
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

          top: '18%',
          bottom: '14%',

          layout: 'radial',

          symbol: 'emptyCircle',

          symbolSize: 7,

          initialTreeDepth: 3,

          animationDurationUpdate: 750,

          emphasis: {
            focus: 'descendant',
          },
        },
      ],
    };
  }
}
