import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoggedUserRoutingModule} from "./logged-user-routing.module";
import {LoggedUserHomeComponent} from "./loggeduserhome/logged-user-home.component";

@NgModule({

  declarations: [
    LoggedUserHomeComponent
  ],

  imports: [
    CommonModule,
    LoggedUserRoutingModule
  ],
  exports: [LoggedUserHomeComponent]
})
export class LoggedUserModule { }
