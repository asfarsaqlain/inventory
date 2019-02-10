import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginController} from '../components/login/controller/LoginController';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainMenuController} from '../components/mainmenu/controller/MainMenuController';

@NgModule({
  declarations: [
    AppComponent, LoginController, MainMenuController
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
