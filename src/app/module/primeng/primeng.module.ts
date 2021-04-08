import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';

const modules = [CommonModule, DropdownModule];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ], exports: [
    ...modules
  ]
})
export class PrimengModule { }
