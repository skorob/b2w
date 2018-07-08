import {Component, Input, OnInit} from '@angular/core';
import {Warehouse} from "../../../../../model/warehouse.class";
import {FormControl, FormGroup} from "@angular/forms";
import {DeliveryService} from "../../service/delivery.service";
import {DeliveryRequestDocument} from "../../../../../model/delivery-request-document.class";
import {DeliveryRequestDocumentItem} from "../../../../../model/delivery-request-document-item.class";

@Component({
  selector: 'app-delivery-request-document',
  templateUrl: './delivery-request-document.component.html',
  styleUrls: ['./delivery-request-document.component.css']
})
export class DeliveryRequestDocumentComponent implements OnInit {

  deliveryRequestDocumentForm: FormGroup;
  deliveryRequestDocument:DeliveryRequestDocument;


  warehouses=[];

  constructor(private deliveryService:DeliveryService) {
    let w1 = new Warehouse();
    w1.id=1; w1.name="Teika";
    this.warehouses.push(w1)
    w1 = new Warehouse();
    w1.id=2; w1.name="Imanta";
    this.warehouses.push(w1)

    this.deliveryRequestDocument = this.deliveryService.createDeliveryRequestDocument();




  }

  ngOnInit() {
    this.deliveryRequestDocumentForm = new FormGroup({
      whs: new FormControl(),
    });
  }

}
