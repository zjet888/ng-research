import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component';
import { EchartModule, PrimengModule, SharedModule } from './module';
import { NavTopComponent } from './component/home/nav-top/nav-top.component';
import { SidebarComponent } from './component/home/sidebar/sidebar.component';
import { ContentComponent } from './component/home/content/content.component';
import { ProfileComponent } from './component/home/content/profile/profile.component';
import { LeftRightTreeComponent } from './component/home/content/tree/left-right-tree/left-right-tree.component';
import { MultipleTreeComponent } from './component/home/content/tree/multiple-tree/multiple-tree.component';
import { BottomTopTreeComponent } from './component/home/content/tree/bottom-top-tree/bottom-top-tree.component';
import { TopBottomTreeComponent } from './component/home/content/tree/top-bottom-tree/top-bottom-tree.component';
import { RightLeftTreeComponent } from './component/home/content/tree/right-left-tree/right-left-tree.component';
import { PolylineTreeComponent } from './component/home/content/tree/polyline-tree/polyline-tree.component';
import { RadialTreeComponent } from './component/home/content/tree/radial-tree/radial-tree.component';
import { TreeComponent } from './component/home/content/tree/tree.component';

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
    ProfileComponent,
    LeftRightTreeComponent,
    MultipleTreeComponent,
    BottomTopTreeComponent,
    TopBottomTreeComponent,
    RightLeftTreeComponent,
    PolylineTreeComponent,
    RadialTreeComponent,
    TreeComponent
  ]
})
export class AppRoutingModule { }
