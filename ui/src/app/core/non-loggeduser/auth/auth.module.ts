import {NgModule} from "@angular/core";
import {SigninComponent} from "./component/signin/signin.component";
import {FormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";
import {SignupComponent} from "./component/signup/signup.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../../shared/shared.module";
import { SignupConfirmationComponent } from './component/signup-confirmation/signup-confirmation.component';
import { SigninHomePageVerifiedComponent } from './component/signin-home-page-verified/signin-home-page-verified.component';
import {BusinessProfileModule} from "../../logged-user/business-profile/business-profile.module";

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
  ]
})

export class AuthModule { }
