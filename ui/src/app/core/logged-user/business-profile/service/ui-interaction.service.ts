import { Injectable } from '@angular/core';
import {Subject} from "rxjs/internal/Subject";
import {ClientClientLocationUpdate} from "../model/client-clinet-location-update.class";
import {Client} from "../../../../model/client.class";
import {ClientLocation} from "../../../../model/client-location.class";

@Injectable()
export class UiInteractionService {

  private clientLocationEditDialogSubject = new Subject<ClientClientLocationUpdate>();
  clientLocationEditDialogObservable = this.clientLocationEditDialogSubject.asObservable();

  constructor() { }

  showEditClientLocationDialog(client:Client, clientLocation:ClientLocation, postAction: Function) {
    let clientClientLocationUpdate = new ClientClientLocationUpdate();
    clientClientLocationUpdate.client = client;
    clientClientLocationUpdate.clientLocation = clientLocation;
    clientClientLocationUpdate.postAction = postAction;
    this.clientLocationEditDialogSubject.next(clientClientLocationUpdate);
  }


}
