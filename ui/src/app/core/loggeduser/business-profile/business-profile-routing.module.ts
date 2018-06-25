import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


import {EditBusinessPartnersComponent} from "./components/edit-business-partners/edit-business-partners.component";

const businessProfileRoutes: Routes = [
  {path : 'edit-business-profile', component: EditBusinessPartnersComponent }
];


@NgModule({
  imports: [RouterModule.forChild(businessProfileRoutes)],
  exports: [RouterModule]
})
export class BusinessProfileRoutingModule { }
