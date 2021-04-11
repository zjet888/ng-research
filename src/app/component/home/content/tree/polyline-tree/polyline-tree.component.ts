import { Component, OnInit } from '@angular/core';
import { BaseTreeComponent } from '../base-tree.component';

@Component({
  selector: 'app-polyline-tree',
  templateUrl: '../left-right-tree/left-right-tree.component.html',
  styleUrls: ['./polyline-tree.component.scss'],
})
export class PolylineTreeComponent extends BaseTreeComponent {
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
          id: 0,
          name: 'tree1',
          data: [this.data],

          top: '10%',
          left: '8%',
          bottom: '22%',
          right: '20%',

          symbolSize: 7,

          edgeShape: 'polyline',
          edgeForkPosition: '63%',
          initialTreeDepth: 3,

          lineStyle: {
            width: 2,
          },

          label: {
            backgroundColor: '#fff',
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
      ],
    };
  }
}
