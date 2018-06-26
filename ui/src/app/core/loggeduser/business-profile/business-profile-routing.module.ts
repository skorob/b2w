import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


import {EditMyBusinessPartnersComponent} from "./components/edit-my-business-partners/edit-my-business-partners.component";
import {EditBusinessProfileComponent} from "./components/edit-business-profile/edit-business-profile.component";

const businessProfileRoutes: Routes = [
  {path : 'edit-my-business-partners', component: EditMyBusinessPartnersComponent },
  {path : 'edit-business-profile', component: EditBusinessProfileComponent }
];


@NgModule({
  imports: [RouterModule.forChild(businessProfileRoutes)],
  exports: [RouterModule]
})
export class BusinessProfileRoutingModule { }
