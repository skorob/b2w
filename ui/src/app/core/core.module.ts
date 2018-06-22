import { NgModule } from '@angular/core'
import {HeaderComponent} from "./header/header.component";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "../app-routing.module";
import {AuthService} from "../auth/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {LoggedUserModule} from "./loggeduser/logged-user.module";
import {LoggedUserRoutingModule} from "./loggeduser/logged-user-routing.module";
import {NonLoggedUserModule} from "./nonloggeduser/non-logged-user.module";


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
