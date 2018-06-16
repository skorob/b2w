import {NgModule} from "@angular/core";
import {SigninComponent} from "./signin/signin.component";
import {FormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";
import {SignupComponent} from "./signup/signup.component";
import {AuthService} from "./auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers : [AuthService]

})

export class AuthModule { }
