import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryRequestDocumentComponent } from './component/delivery-request-document/delivery-request-document.component';
import {DistributionRoutingModule} from "./distribution-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeliveryRequestDocumentItemComponent } from './component/delivery-request-document-item/delivery-request-document-item.component';
import {DeliveryService} from "./service/delivery.service";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DistributionRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DeliveryRequestDocumentComponent, DeliveryRequestDocumentItemComponent],
  providers: [DeliveryService]

})
export class DistributionModule { }
