import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoggedUserHomeComponent} from "./loggeduserhome/logged-user-home.component"

const loggedUserRoutes: Routes = [
  {path : 'logged-user-home', component: LoggedUserHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(loggedUserRoutes)],
  exports: [RouterModule]
})
export class LoggedUserRoutingModule { }
