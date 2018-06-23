import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoggedUserRoutingModule} from "./logged-user-routing.module";
import {LoggedUserHomeComponent} from "./logged-user-home/logged-user-home.component";

@NgModule({

  declarations: [
    LoggedUserHomeComponent
  ],

  imports: [
    CommonModule
  ],
  exports: [LoggedUserHomeComponent]
})
export class LoggedUserModule { }
