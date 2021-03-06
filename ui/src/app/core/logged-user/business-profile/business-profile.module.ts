import { NgModule } from '@angular/core'

import {EditMyBusinessPartnersComponent} from "./component/edit-my-business-partners/edit-my-business-partners.component";
import {BusinessProfileRoutingModule} from "./business-profile-routing.module";
import {BusinessProfileService} from "./service/business-profile.service";
import {EditBusinessProfileComponent} from "./component/edit-business-profile/edit-business-profile.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../../shared/shared.module";
import { EditMyClientListComponent } from './component/edit-my-client-list/edit-my-client-list.component';
import { ModalEditMyClientWithAddressComponent } from './component/modal-edit-my-client-with-address/modal-edit-my-client-with-address.component';
import {AgmCoreModule} from "@agm/core";
import {GEOService} from "../../../../shared/service/geo.service";
import { EditMyClientListItemComponent } from './component/edit-my-client-list-item/edit-my-client-list-item.component';
import { EditMyClientLocationsListItemComponent } from './component/edit-my-client-locations-list-item/edit-my-client-locations-list-item.component';
import {UiInteractionService} from "./service/ui-interaction.service";



@NgModule({
  declarations: [
      EditMyBusinessPartnersComponent,
      EditBusinessProfileComponent,
      EditMyClientListComponent,
      ModalEditMyClientWithAddressComponent,
      EditMyClientListItemComponent,
      EditMyClientLocationsListItemComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    BusinessProfileRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: GEOService.GEO_API_KEY,
      libraries: ["places"]
    })
  ],
  exports: [
    EditBusinessProfileComponent
  ],
  providers: [BusinessProfileService,UiInteractionService]
})


export class BusinessProfileModule {}
