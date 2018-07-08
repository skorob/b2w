import {LogisticProfile} from "./logistic-profile.class";
import {DistributorProfile} from "./distributor-profile.class";

export class DeliveryRequestDocumentItem {

  id:number;
  clientName:string;
  deliveryAdress:string;
  deliveryStatus:string;
  weight:number;

}
