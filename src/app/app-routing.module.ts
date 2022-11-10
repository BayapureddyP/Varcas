import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './notes/notes.component';
import { RoutingComponent } from './routing/routing.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
 {
  path:"",component:AboutComponent
 },
 {
  path:'routing',component:RoutingComponent
 },
 {
  path:'about',component:AboutComponent
 },
 {
  path:'dashboard',component:DashboardComponent
 },
 {
  path:'sidebar',component:SidebarComponent
 },
 {
  path :'notes',component:NotesComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
