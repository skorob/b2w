import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoggedUserModule} from "../logged-user/logged-user.module";
import {HomeComponent} from "./component/home/home.component";
import {SignupSigninModule} from "./sign-up-sign-in/signup-signin.module";

@NgModule({
  imports: [
    CommonModule,
    LoggedUserModule,
    SignupSigninModule
  ],
  declarations: [HomeComponent]
})
export class NonLoggedUserModule { }
