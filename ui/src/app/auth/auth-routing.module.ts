import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {SigninComponent} from "./signin/signin.component";
import {RouterModule} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";

const authRoutes: Routes = [
  {path : 'signin', component: SigninComponent },
  {path : 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
