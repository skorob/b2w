import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {SigninComponent} from "./component/signin/signin.component";
import {RouterModule} from "@angular/router";
import {SignupComponent} from "./component/signup/signup.component";
import {SignupConfirmationComponent} from "./component/signup-confirmation/signup-confirmation.component";
import {SigninHomePageVerifiedComponent} from "./component/signin-home-page-verified/signin-home-page-verified.component";

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
