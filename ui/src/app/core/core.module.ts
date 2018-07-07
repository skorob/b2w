import { NgModule } from '@angular/core'
import {HeaderComponent} from "./component/header/header.component";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "../app-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {LoggedUserModule} from "./logged-user/logged-user.module";
import {NonLoggedUserModule} from "./non-loggeduser/non-logged-user.module";
import {SignupSigninModule} from "./non-loggeduser/sign-up-sign-in/signup-signin.module";


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    NonLoggedUserModule,
    LoggedUserModule
  ],
  exports: [
    HeaderComponent
  ]
})


export class CoreModule {}
