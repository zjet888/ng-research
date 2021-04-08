import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component';
import { PrimengModule, SharedModule } from './module';
import { NavTopComponent } from './component/home/nav-top/nav-top.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];
const modules = [SharedModule];
@NgModule({
  imports: [RouterModule.forRoot(routes), ...modules],
  exports: [RouterModule, ...modules],
  declarations: [
    HomeComponent,
    NavTopComponent
  ]
})
export class AppRoutingModule { }
