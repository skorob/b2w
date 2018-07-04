import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoggedUserHomeComponent} from "./logged-user-home/logged-user-home.component";
import {BusinessProfileModule} from "./business-profile/business-profile.module";

@NgModule({

  declarations: [
    LoggedUserHomeComponent
  ],

  imports: [
    CommonModule,
    BusinessProfileModule

  ],
  exports: [LoggedUserHomeComponent]
})
export class LoggedUserModule { }
