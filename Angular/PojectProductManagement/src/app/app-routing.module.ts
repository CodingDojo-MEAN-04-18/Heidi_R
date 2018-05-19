import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { ViewComponent } from 'src/app/view/view.component';
import { createComponent } from '@angular/compiler/src/core';
import { EditComponent } from 'src/app/edit/edit.component';
import { NewComponent } from 'src/app/new/new.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: HomeComponent,
    children: []
  },
  {
    path: 'view',
    pathMatch: "full",
    component: ViewComponent,
    children: []
  },
  {
    path: 'edit/:id',
    pathMatch: "full",
    component: EditComponent,
    children: []
  },
  {
    path: 'create',
    pathMatch: "full",
    component: NewComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
