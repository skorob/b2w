import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


import {EditMyBusinessPartnersComponent} from "./component/edit-my-business-partners/edit-my-business-partners.component";
import {EditBusinessProfileComponent} from "./component/edit-business-profile/edit-business-profile.component";
import {EditMyClientListComponent} from "./component/edit-my-client-list/edit-my-client-list.component";

const businessProfileRoutes: Routes = [
  {path : 'edit-my-business-partners', component: EditMyBusinessPartnersComponent },
  {path : 'edit-business-profile', component: EditBusinessProfileComponent },
  {path : 'edit-my-clients', component: EditMyClientListComponent }
];


@NgModule({
  imports: [RouterModule.forChild(businessProfileRoutes)],
  exports: [RouterModule]
})
export class BusinessProfileRoutingModule { }
