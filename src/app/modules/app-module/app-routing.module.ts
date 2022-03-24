import { RoutingComponent } from './../../components/navigation/routing/routing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'races', component: RoutingComponent },
  { path: 'race/:id', component: RoutingComponent },
  { path: '**', component: RoutingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
