import {Client} from "../../../../model/client.class";
import {ClientLocation} from "../../../../model/client-location.class";

export class ClientClientLocationUpdate {

  client:Client;
  clientLocation:ClientLocation;
  postAction: Function;
}
