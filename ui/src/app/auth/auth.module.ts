import {NgModule} from "@angular/core";
import {SigninComponent} from "./signin/signin.component";
import {FormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";
import {SignupComponent} from "./signup/signup.component";
import {AuthService} from "./auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import { SignupConfirmationComponent } from './signup-confirmation/signup-confirmation.component';
import { SigninHomePageVerifiedComponent } from './signin-home-page-verified/signin-home-page-verified.component';
import {BusinessProfileModule} from "../core/loggeduser/business-profile/business-profile.module";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    SignupConfirmationComponent,
    SigninHomePageVerifiedComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    BusinessProfileModule
  ],
  providers : [AuthService]

})

export class AuthModule { }
