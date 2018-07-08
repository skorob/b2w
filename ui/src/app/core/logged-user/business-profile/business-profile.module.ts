import { NgModule } from '@angular/core'

import {EditMyBusinessPartnersComponent} from "./component/edit-my-business-partners/edit-my-business-partners.component";
import {BusinessProfileRoutingModule} from "./business-profile-routing.module";
import {BusinessPartnerProfileService} from "./business-profile.service";
import {CommonModule} from "@angular/common";
import {EditBusinessProfileComponent} from "./component/edit-business-profile/edit-business-profile.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../../shared/shared.module";
import { EditMyClientsComponent } from './component/edit-my-clients/edit-my-clients.component';
import { EditMyClientWithAddressComponent } from './component/edit-my-client-with-address/edit-my-client-with-address.component';
import {AgmCoreModule} from "@agm/core";


@NgModule({
  declarations: [
      EditMyBusinessPartnersComponent,
      EditBusinessProfileComponent,
      EditMyClientsComponent,
      EditMyClientWithAddressComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    BusinessProfileRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNBikVW8Hx7-ntW3HI2iHYoKBjuXodkZs',
      libraries: ["places"]
    })
  ],
  exports: [
    EditBusinessProfileComponent
  ],
  providers: [BusinessPartnerProfileService]
})


export class BusinessProfileModule {}
