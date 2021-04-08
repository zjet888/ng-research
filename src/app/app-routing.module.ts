import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component';
import { EchartModule, PrimengModule, SharedModule } from './module';
import { NavTopComponent } from './component/home/nav-top/nav-top.component';
import { SidebarComponent } from './component/home/sidebar/sidebar.component';
import { ContentComponent } from './component/home/content/content.component';
import { ProfileComponent } from './component/home/content/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];
const modules = [SharedModule, EchartModule];
@NgModule({
  imports: [RouterModule.forRoot(routes), ...modules],
  exports: [RouterModule, ...modules],
  declarations: [
    HomeComponent,
    NavTopComponent,
    SidebarComponent,
    ContentComponent,
    ProfileComponent
  ]
})
export class AppRoutingModule { }
