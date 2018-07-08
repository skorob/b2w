import {Component, Input, OnInit} from '@angular/core';
import {DeliveryRequestDocumentItem} from "../../../../../model/delivery-request-document-item.class";

@Component({
  selector: 'app-delivery-request-document-item',
  templateUrl: './delivery-request-document-item.component.html',
  styleUrls: ['./delivery-request-document-item.component.css']
})
export class DeliveryRequestDocumentItemComponent implements OnInit {


  @Input()
  deliveryItem:DeliveryRequestDocumentItem;

  constructor() { }


  defineByStatus()  {
    return "badge-warning";
  }

  ngOnInit() {
  }

}
