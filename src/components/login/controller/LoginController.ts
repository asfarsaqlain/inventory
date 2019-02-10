import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: '../view/LoginComponent.html'
})
export class LoginController {

  userName : string = "";
  password : string  = "";

  constructor(public router : Router)
  {}
  loginClicked()
  {
    console.log("User Name : "+this.userName);
    console.log("Password  : " +this.password);
    this.router.navigateByUrl("mainmenu", {skipLocationChange : true});
  }
}
