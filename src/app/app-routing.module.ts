import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component';
import { PrimengModule, SharedModule } from './module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule, PrimengModule],
  exports: [RouterModule],
  declarations: [
    HomeComponent
  ]
})
export class AppRoutingModule { }
