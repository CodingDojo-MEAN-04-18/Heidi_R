import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { IndexComponent } from 'src/app/index/index.component';
import { AddviewComponent } from 'src/app/addview/addview.component';
import { ViewComponent } from 'src/app/view/view.component';
import { AddComponent } from 'src/app/add/add.component';
import { GameComponent } from 'src/app/game/game.component';
import { GameOneComponent } from 'src/app/game-one/game-one.component';
import { GameTwoComponent } from 'src/app/game-two/game-two.component';
import { GameThreeComponent } from 'src/app/game-three/game-three.component';

const routes: Routes = [
  {path: '',component: IndexComponent,children: [
    {path: 'manageplayer', component: AddviewComponent, children:[
      {path: 'view', pathMatch: 'full', component: ViewComponent},
      {path: 'add', pathMatch: 'full', component: AddComponent}
    ]},
    {path: 'managestatus', component: GameComponent, children:[
      {path: 'one', component: GameOneComponent},
      {path: 'two', component: GameTwoComponent},
      {path: 'three', component: GameThreeComponent},
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
