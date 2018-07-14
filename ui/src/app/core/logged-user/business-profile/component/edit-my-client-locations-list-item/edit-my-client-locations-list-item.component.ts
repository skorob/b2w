import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BusinessProfileService} from "../../service/business-profile.service";
import {ClientLocation} from "../../../../../model/client-location.class";
import {UiInteractionService} from "../../service/ui-interaction.service";
import {Client} from "../../../../../model/client.class";

@Component({
  selector: 'edit-my-client-locations-list-item',
  templateUrl: './edit-my-client-locations-list-item.component.html',
  styleUrls: ['./edit-my-client-locations-list-item.component.css']
})
export class EditMyClientLocationsListItemComponent implements OnInit {

  @Input()
  clientLocation:ClientLocation;

  @Input()
  client:Client;

  @Output()
  refreshClientLocationsEvent = new EventEmitter();

  constructor(private businessProfileService:BusinessProfileService, private uiInteractionServiceService:UiInteractionService ) { }

  ngOnInit() {
  }


  onClientLocationRemove() {
    if(confirm("Are you sure to delete client location ?")) {
      this.businessProfileService.removeMyClientLocation(this.clientLocation.id).then(
        data=> {
          this.refreshClientLocationsEvent.emit();
        }
      );
    }
  }

  onClientLocationEdit() {
    this.uiInteractionServiceService.showEditClientLocationDialog(this.client, this.clientLocation, () : void => {
      this.refreshClientLocationsEvent.emit();
    });
  }
}
