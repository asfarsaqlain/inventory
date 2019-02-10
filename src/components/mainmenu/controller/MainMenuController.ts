import {Component} from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector : "main-menu",
  templateUrl : '../view/MainMenuComponent.html'
})
export class MainMenuController {

  constructor(public router : Router)
  {}
  logout()
  {
   this.router.navigateByUrl("", {skipLocationChange : true});
  }
}
