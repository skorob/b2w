import { Injectable } from '@angular/core';
import {DeliveryRequestDocument} from "../../../../model/delivery-request-document.class";
import {DeliveryRequestDocumentItem} from "../../../../model/delivery-request-document-item.class";

@Injectable()
export class DeliveryService {

  constructor() { }

  public createDeliveryRequestDocument():DeliveryRequestDocument {
    let rv = new DeliveryRequestDocument();
    rv.items = [];
    let item = new DeliveryRequestDocumentItem();
    item.id = 1;
    item.clientName = "Mego";
    item.deliveryAdress = "Dzelzavas 1";
    item.deliveryStatus = "Creating";
    item.weight=10;
    rv.items.push(item);

    item = new DeliveryRequestDocumentItem();
    item.id = 2;
    item.clientName = "Maxima";
    item.deliveryAdress = "Hanzas 8";
    item.deliveryStatus = "Creating";
    item.weight=15.4;
    rv.items.push(item);

    item = new DeliveryRequestDocumentItem();
    item.id = 3;
    item.clientName = "Mego";
    item.deliveryAdress = "Jumpravas 8";
    item.deliveryStatus = "Creating";
    item.weight=133.4;
    rv.items.push(item);

    item = new DeliveryRequestDocumentItem();
    item.id = 4;
    item.clientName = "Alfa";
    item.deliveryAdress = "Brivibas";
    item.deliveryStatus = "Creating";
    item.weight=132.4;
    rv.items.push(item);

    return rv;

  }

}
