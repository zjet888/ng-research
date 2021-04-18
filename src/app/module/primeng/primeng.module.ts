import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TreeModule } from 'primeng/tree';

const modules = [
  PanelMenuModule,
  CommonModule,
  ButtonModule,
  SelectButtonModule,
  DropdownModule,
  SidebarModule,
  TreeModule,
  RippleModule,
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class PrimengModule {}
