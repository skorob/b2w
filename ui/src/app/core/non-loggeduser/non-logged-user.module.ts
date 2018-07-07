import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoggedUserModule} from "../logged-user/logged-user.module";
import {HomeComponent} from "./component/home/home.component";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  imports: [
    CommonModule,
    LoggedUserModule,
    AuthModule
  ],
  declarations: [HomeComponent]
})
export class NonLoggedUserModule { }
