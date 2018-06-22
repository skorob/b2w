import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoggedUserHomeComponent} from "./logged-user-home/logged-user-home.component"

const loggedUserRoutes: Routes = [
  {path : 'logged-user-home', component: LoggedUserHomeComponent },
  {path : '', component: LoggedUserHomeComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(loggedUserRoutes)],
  exports: [RouterModule]
})
export class LoggedUserRoutingModule { }
