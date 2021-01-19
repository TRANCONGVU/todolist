import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/todolist',
  //   pathMatch: 'full',
  // },
  // { path: '/todolist', component: TodolistComponent },
  // { path: '/dashboard' , component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
