import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from 'src/app/seattle/seattle.component';
import { WashingtonComponent } from 'src/app/washington/washington.component';
import { BurbankComponent } from 'src/app/burbank/burbank.component';
import { ChicagoComponent } from 'src/app/chicago/chicago.component';
import { DallasComponent } from 'src/app/dallas/dallas.component';
import { SanhoseComponent } from 'src/app/sanhose/sanhose.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SeattleComponent,
    children: []
  },
  {
    path: 'seattle',
    pathMatch: 'full',
    component: SeattleComponent,
    children: []
  },
  {
    path: 'washingtondc',
    pathMatch: 'full',
    component: WashingtonComponent,
    children: []
  },
  {
    path: 'burbank',
    pathMatch: 'full',
    component: BurbankComponent,
    children: []
  },
  {
    path: 'chicago',
    pathMatch: 'full',
    component: ChicagoComponent,
    children: []
  },
  {
    path: 'dallas',
    pathMatch: 'full',
    component: DallasComponent,
    children: []
  },
  {
    path: 'sanhose',
    pathMatch: 'full',
    component: SanhoseComponent,
    children: []
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
