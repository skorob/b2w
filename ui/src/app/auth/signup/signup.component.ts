import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {ValidationErrors} from "@angular/forms";
import {ErrorHandlerService} from "../../../shared/error-handler.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'login': new FormControl(null,
          [Validators.required,
          Validators.email]),
      'password' : new FormControl(null, Validators.required)
    });
  }

  onSignup() {
    this.authService.signup(this.loginForm.value.login, this.loginForm.value.login).subscribe(
      data => {
        
      },
      err => {
        this.errorHandlerService.handleHttpError(err, this.loginForm);
      });;
  }
}
