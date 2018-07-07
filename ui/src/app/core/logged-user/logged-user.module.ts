import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoggedUserHomeComponent} from "./component/logged-user-home.component";
import {BusinessProfileModule} from "./business-profile/business-profile.module";
import {DistributionModule} from "./distribution/distribution.module";

@NgModule({

  declarations: [
    LoggedUserHomeComponent
  ],

  imports: [
    CommonModule,
    BusinessProfileModule,
    DistributionModule
  ],
  exports: [LoggedUserHomeComponent]
})
export class LoggedUserModule { }
