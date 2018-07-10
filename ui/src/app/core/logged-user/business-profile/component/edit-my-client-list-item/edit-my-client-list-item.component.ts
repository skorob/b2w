import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../../../model/client.class";

@Component({
  selector: 'edit-my-client-list-item',
  templateUrl: './edit-my-client-list-item.component.html',
  styleUrls: ['./edit-my-client-list-item.component.css']
})
export class EditMyClientListItemComponent implements OnInit {

  @Input()
  client:Client;

  constructor() { }

  ngOnInit() {
  }

}
