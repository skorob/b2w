import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';
import {BusinessProfileService} from "../../business-profile.service";
import {Client} from "../../../../../model/client.class";
import 'jquery';
import 'bootstrap';

import {ClientLocation} from "../../../../../model/client-location.class";
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



  constructor(private businessProfileService:BusinessProfileService) {}

  ngOnInit() {
      this.searchName="*";
      this.refreshClients();
  }


  refreshClients() {
    this.businessProfileService.findMyClients(this.searchName).then((clients: Client[]) => {
      this.clients = clients;
    });
  }

  onCreatedItem($event) {
    this.refreshClients();
  }

  clientLocationAddDialogShow($event) {

    this.currentClient = $event;
    $('#exampleModal').modal('show');

  }

  addEditDialogShow() {
    console.log("==================");
    this.currentClient = new Client();
  }

  toggle111() {
    $('#exampleModal').modal('show');
  }

}
