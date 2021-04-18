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
import { GraphComponent } from './component/home/content/graph/graph.component';
import { GraphForceComponent } from './component/home/content/graph/graph-force/graph-force.component';
import { GraphCartesianComponent } from './component/home/content/graph/graph-cartesian/graph-cartesian.component';
import { GraphSimpleComponent } from './component/home/content/graph/graph-simple/graph-simple.component';
import { GraphForce1Component } from './component/home/content/graph/graph-force1/graph-force1.component';
import { GraphHideLabelComponent } from './component/home/content/graph/graph-hide-label/graph-hide-label.component';
import { GraphLesMiserableComponent } from './component/home/content/graph/graph-les-miserable/graph-les-miserable.component';
import { GraphLesMiserable1Component } from './component/home/content/graph/graph-les-miserable1/graph-les-miserable1.component';
import { GraphDynamicComponent } from './component/home/content/graph/graph-dynamic/graph-dynamic.component';
import { GraphLifeExpectancyComponent } from './component/home/content/graph/graph-life-expectancy/graph-life-expectancy.component';
import { GraphWebkitDepComponent } from './component/home/content/graph/graph-webkit-dep/graph-webkit-dep.component';
import { GraphNpmDepComponent } from './component/home/content/graph/graph-npm-dep/graph-npm-dep.component';
import { GraphCalendarComponent } from './component/home/content/graph/graph-calendar/graph-calendar.component';
import { GraphBaseComponent } from './component/home/content/graph/graph-base/graph-base.component';

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
    TreeComponent,
    GraphComponent,
    GraphForceComponent,
    GraphCartesianComponent,
    GraphSimpleComponent,
    GraphForce1Component,
    GraphHideLabelComponent,
    GraphLesMiserableComponent,
    GraphLesMiserable1Component,
    GraphDynamicComponent,
    GraphLifeExpectancyComponent,
    GraphWebkitDepComponent,
    GraphNpmDepComponent,
    GraphCalendarComponent,
    GraphBaseComponent
  ]
})
export class AppRoutingModule { }
