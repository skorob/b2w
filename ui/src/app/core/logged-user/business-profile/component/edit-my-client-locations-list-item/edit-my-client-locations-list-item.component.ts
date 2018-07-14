import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'edit-my-client-locations-list-item',
  templateUrl: './edit-my-client-locations-list-item.component.html',
  styleUrls: ['./edit-my-client-locations-list-item.component.css']
})
export class EditMyClientLocationsListItemComponent implements OnInit {

  @Input()
  clientLocation;

  constructor() { }

  ngOnInit() {
  }

}
