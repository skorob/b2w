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
  clientsRefreshed = new EventEmitter<void>();

  constructor(private businessProfileService:BusinessProfileService) { }

  ngOnInit() {
  }

  onDelete() {
    if(confirm("Are you sure to delete client : '"+this.client.name+"' ")) {
      this.businessProfileService.removeMyClient(this.client.id).then(
        r=> {
            this.clientsRefreshed.emit();
        }
      );
    }

  }

}
