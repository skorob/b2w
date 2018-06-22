import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoggedUserModule} from "../loggeduser/logged-user.module";
import {HomeComponent} from "./components/home/home.component";

@NgModule({
  imports: [
    CommonModule,
    LoggedUserModule
  ],
  declarations: [HomeComponent]
})
export class NonLoggedUserModule { }
