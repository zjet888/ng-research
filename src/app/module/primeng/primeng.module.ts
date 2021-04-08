import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';

const modules = [CommonModule, ButtonModule, SelectButtonModule, DropdownModule, SidebarModule, RippleModule];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ], exports: [
    ...modules
  ]
})
export class PrimengModule { }
