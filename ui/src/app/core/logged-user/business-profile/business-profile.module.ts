import { NgModule } from '@angular/core'

import {EditMyBusinessPartnersComponent} from "./component/edit-my-business-partners/edit-my-business-partners.component";
import {BusinessProfileRoutingModule} from "./business-profile-routing.module";
import {BusinessPartnerProfileService} from "./business-profile.service";
import {CommonModule} from "@angular/common";
import {EditBusinessProfileComponent} from "./component/edit-business-profile/edit-business-profile.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../../shared/shared.module";


@NgModule({
  declarations: [
      EditMyBusinessPartnersComponent,
      EditBusinessProfileComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    BusinessProfileRoutingModule
  ],
  exports: [
    EditBusinessProfileComponent
  ],
  providers: [BusinessPartnerProfileService]
})


export class BusinessProfileModule {}
