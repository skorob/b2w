import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DeliveryRequestDocumentComponent} from "./component/delivery-request-document/delivery-request-document.component";


const deliveryRequestDocument: Routes = [
  {path : 'delivery-request-document', component: DeliveryRequestDocumentComponent }
];


@NgModule({
  imports: [RouterModule.forChild(deliveryRequestDocument)],
  exports: [RouterModule]
})
export class DistributionRoutingModule { }
