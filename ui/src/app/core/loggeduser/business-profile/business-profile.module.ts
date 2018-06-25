import { NgModule } from '@angular/core'

import {EditBusinessPartnersComponent} from "./components/edit-business-partners/edit-business-partners.component";
import {BusinessProfileRoutingModule} from "./business-profile-routing.module";
import {BusinessPartnerProfileService} from "./business-profile.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
      EditBusinessPartnersComponent
  ],
  imports: [
    CommonModule,
    BusinessProfileRoutingModule
  ],
  exports: [

  ],
  providers: [BusinessPartnerProfileService]
})


export class BusinessProfileModule {}
