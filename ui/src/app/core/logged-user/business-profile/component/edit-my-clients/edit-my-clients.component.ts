import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';
import {BusinessProfileService} from "../../business-profile.service";
@Component({
  selector: 'edit-my-clients',
  templateUrl: './edit-my-clients.component.html',
  styleUrls: ['./edit-my-clients.component.css']
})
export class EditMyClientsComponent implements OnInit {


  constructor(private businessProfileService:BusinessProfileService) {}

  ngOnInit() {

  }



}
