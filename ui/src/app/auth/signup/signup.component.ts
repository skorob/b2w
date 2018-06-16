import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'login': new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required)
    });
  }

  onSignup() {

    this.authService.signup(this.loginForm.value.login, this.loginForm.value.login).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err)
      });;
  }

  get name() { return this.loginForm.get('name'); }

  get power() { return this.loginForm.get('power'); }

}
