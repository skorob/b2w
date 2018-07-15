import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../../../../model/client.class";
import {BusinessProfileService} from "../../service/business-profile.service";
import {UiInteractionService} from "../../service/ui-interaction.service";

@Component({
  selector: 'edit-my-client-list-item',
  templateUrl: './edit-my-client-list-item.component.html',
  styleUrls: ['./edit-my-client-list-item.component.css']
})
export class EditMyClientListItemComponent implements OnInit {

  @Input()
  client:Client;

  @Output()
  clientsRefreshEvent = new EventEmitter<void>();

  constructor(private businessProfileService:BusinessProfileService, private uiInteractionService : UiInteractionService) { }

  ngOnInit() {}

  onClientDeleteClick() {
    if(confirm("Are you sure to delete client : '"+this.client.name+"' ")) {
      this.businessProfileService.removeMyClient(this.client.id).then(
        r=> {
            this.clientsRefreshEvent.emit();
        }
      );
    }
  }

  onClientLocationAddClick() {
    this.uiInteractionService.showEditClientLocationDialog(
      this.client,
      null,
      () : void=> {
          this.onRefreshClient();
        })
  }

  onRefreshClient() {
    this.businessProfileService.findMyClientById(this.client.id).then(
      (client=> {
        this.client = client;
      })
    )
  }

  isClientWithClientLocations() {
    return this.client.clientLocations && this.client.clientLocations.length>0;
  }


}
