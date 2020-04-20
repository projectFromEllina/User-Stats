import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './components/main/main.component';
import {UserStatisticsComponent} from "./components/user-statistics/user-statistics.component";
import {ChartsComponent} from "./components/charts/charts.component";
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'user-statistics', component: UserStatisticsComponent},
  {path: 'user/:id', component: ChartsComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
