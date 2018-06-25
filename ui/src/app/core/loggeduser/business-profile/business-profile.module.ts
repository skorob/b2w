import { NgModule } from '@angular/core'

import {EditBusinessPartnerProfileComponent} from "./components/edit-business-partner-profile/edit-business-partner-profile.component";
import {BusinessProfileRoutingModule} from "./business-profile-routing.module";
import {BusinessPartnerProfileService} from "./business-profile.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
      EditBusinessPartnerProfileComponent
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
