import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginController} from '../components/login/controller/LoginController';
import {MainMenuController} from '../components/mainmenu/controller/MainMenuController';

const routes: Routes = [
  {path : "", component:LoginController},
  {path : "mainmenu", component:MainMenuController}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
