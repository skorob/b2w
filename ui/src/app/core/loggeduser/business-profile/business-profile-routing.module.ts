import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


import {EditBusinessPartnerProfileComponent} from "./components/edit-business-partner-profile/edit-business-partner-profile.component";

const businessProfileRoutes: Routes = [
  {path : 'edit-business-profile', component: EditBusinessPartnerProfileComponent }
];


@NgModule({
  imports: [RouterModule.forChild(businessProfileRoutes)],
  exports: [RouterModule]
})
export class BusinessProfileRoutingModule { }
