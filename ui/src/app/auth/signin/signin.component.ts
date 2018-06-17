import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const login = form.value.login;
    const password = form.value.password;
    this.authService.signin(login, password).subscribe(
      (data:HttpResponse) => {

        if(data.headers.has("Auth-Token")) {
          this.authService.setToken(data.headers.get("Auth-Token"));
          console.log(this.authService.getToken());
        }
        this.router.navigate(['/signup-confirm']);
      },
      err => {

      });;

  }

}
