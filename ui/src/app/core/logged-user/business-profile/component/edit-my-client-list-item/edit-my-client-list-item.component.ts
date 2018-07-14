import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../../../../model/client.class";
import {BusinessProfileService} from "../../business-profile.service";

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

  @Output()
  clientLocationAddEvent = new EventEmitter<Client>();


  constructor(private businessProfileService:BusinessProfileService) { }

  ngOnInit() {
  }

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
    this.clientLocationAddEvent.emit(this.client);
  }


}
