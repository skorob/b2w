import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {SigninComponent} from "./signin/signin.component";
import {RouterModule} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {SignupConfirmationComponent} from "./signup-confirmation/signup-confirmation.component";
import {SigninHomePageVerifiedComponent} from "./signin-home-page-verified/signin-home-page-verified.component";

const authRoutes: Routes = [
  {path : 'signin', component: SigninComponent },
  {path : 'signup', component: SignupComponent },
  {path : 'signup-confirm', component: SignupConfirmationComponent },
  {path : 'signin-confirm-home-page-verified', component: SigninHomePageVerifiedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
