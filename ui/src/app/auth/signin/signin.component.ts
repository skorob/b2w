import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {ErrorHandlerService} from "../../../shared/error-handler.service";
import {errorHandler} from "@angular/platform-browser/src/browser";
import {ApplicationUser} from "../../model/application-user.class";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private errorHandlerService: ErrorHandlerService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'login': new FormControl(
        null,
        [Validators.required,
          Validators.email]),
      'password' : new FormControl(null, Validators.required)
    });
  }


  onSignin() {
    const login = this.loginForm.value.login;
    const password = this.loginForm.value.password;
    this.authService.signin(login, password).then(
      (data) => {
          this.onSuccesfullLogin();
      },
      err => {
        this.errorHandlerService.handleInvalidLoginPassword(null, this.loginForm)
      });;
  }


  private onSuccesfullLogin(){
      this.authService.readApplicationUser().then(
        ((appUser:ApplicationUser)=>{
          console.log(JSON.stringify(appUser));
          if(appUser.userStatus==='verified' || (!appUser.businessPartners || appUser.businessPartners.length==0)) {
            this.router.navigate(['/signin-confirm-home-page-verified']);
          } else {
            this.router.navigate(['/logged-user-home']);
          }
      }));
  }

}
