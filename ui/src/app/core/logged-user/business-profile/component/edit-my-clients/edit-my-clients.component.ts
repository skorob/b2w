import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';
import {BusinessProfileService} from "../../business-profile.service";
import {Client} from "../../../../../model/client.class";
@Component({
  selector: 'edit-my-clients',
  templateUrl: './edit-my-clients.component.html',
  styleUrls: ['./edit-my-clients.component.css']
})
export class EditMyClientsComponent implements OnInit {


  clients:Client[];
  searchName:string;


  constructor(private businessProfileService:BusinessProfileService) {}

  ngOnInit() {
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

}
