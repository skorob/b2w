import {Component, OnInit} from '@angular/core';
import {} from '@types/googlemaps';
import {BusinessProfileService} from "../../service/business-profile.service";
import {Client} from "../../../../../model/client.class";
import 'jquery';
import 'bootstrap';

import {ClientLocation} from "../../../../../model/client-location.class";
import {UiInteractionService} from "../../service/ui-interaction.service";

@Component({
  selector: 'edit-my-clients',
  templateUrl: './edit-my-client-list.component.html',
  styleUrls: ['./edit-my-client-list.component.css']
})
export class EditMyClientListComponent implements OnInit {


  clients:Client[];
  searchName:string;

  currentClient:Client;

  currentClientLocation: ClientLocation;


  constructor(private businessProfileService:BusinessProfileService, private uiInteractionService:UiInteractionService) {}

  ngOnInit() {
      this.searchName="*";
      this.clientsRefresh();
  }


  clientsRefresh() {
    this.businessProfileService.findMyClients(this.searchName).then((clients: Client[]) => {
      this.clients = clients;
    });
  }


  clientLocationAddDialogShow($event) {

    this.uiInteractionService.showEditClientLocationDialog(
      $event,
      null,
      () : void => {
          this.businessProfileService.findMyClientById(this.currentClient.id).then((client:Client)=> {
          this.currentClient = client;
        })
      })

  }
}
