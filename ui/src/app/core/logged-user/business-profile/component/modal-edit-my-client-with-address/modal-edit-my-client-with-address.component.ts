import {
  Component,
  ElementRef,
  Input,
  NgZone, OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import {MapsAPILoader} from "@agm/core";
import {} from '@types/googlemaps';
import {ClientLocation} from "../../../../../model/client-location.class";
import {Utils} from "../../../../../utils/utils.class";
import {GEOService} from "../../../../../../shared/service/geo.service";
import {BusinessProfileService} from "../../service/business-profile.service";
import {Client} from "../../../../../model/client.class";
import * as $ from 'jquery';
import {Subscription} from "rxjs/internal/Subscription";
import {UiInteractionService} from "../../service/ui-interaction.service";

@Component({
  selector: 'edit-my-client-with-adress',
  templateUrl: './modal-edit-my-client-with-address.component.html',
  styleUrls: ['./modal-edit-my-client-with-address.component.css'],
})
export class ModalEditMyClientWithAddressComponent implements OnInit, OnDestroy{


  @Input()
  client: Client;

  @Input()
  clientLocation: ClientLocation;


  @ViewChild('search')
  public searchElement: ElementRef;


  private editClientMode:boolean;

  private postAction:Function;


  clientLocationEditDialogSubscription:Subscription;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private geoService:GEOService,
    private businessProfileService:BusinessProfileService,
    private  uiInteractionService:UiInteractionService
  ) { }

  ngOnInit() {
    this.clearData();

    this.clientLocationEditDialogSubscription = this.uiInteractionService.clientLocationEditDialogObservable.subscribe(
      (clientClientLocation=> {
        this.client = clientClientLocation.client == null ? new Client() : clientClientLocation.client;
        this.clientLocation = clientClientLocation.clientLocation == null ? new ClientLocation() : clientClientLocation.clientLocation;
        this.postAction = clientClientLocation.postAction;
        $('#exampleModal').modal('show');
      })
    );

    this.mapsAPILoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["address"] });

        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if(place.geometry === undefined || place.geometry === null ){
              return;
            }
            this.clientLocation.longitude = place.geometry.location.lng();
            this.clientLocation.latitude = place.geometry.location.lat();
            this.clientLocation.postCode = Utils.extractValueFrom(place, Utils.GEO_POST_CODE);
            this.clientLocation.house = Utils.extractValueFrom(place, Utils.GEO_HOUSE);
            this.clientLocation.city=Utils.extractValueFrom(place, Utils.GEO_CITY);
            this.clientLocation.street = Utils.extractValueFrom(place, Utils.GEO_STREET);
            this.clientLocation.country= Utils.extractValueFrom(place, Utils.GEO_COUNTRY);
            this.clientLocation.fullAddress = this.searchElement.nativeElement.value;
            console.log(this.clientLocation.longitude, this.clientLocation.latitude);
          });
        });
      }
    );
  }




  placeMarker($event) {
    console.log($event)
    this.clientLocation.latitude = $event.coords.lat;
    this.clientLocation.longitude = $event.coords.lng;
    this.geoService.readGEOInfoByLangLat(this.clientLocation.latitude,this.clientLocation.longitude).then(
      ((locationInfo:any)=>{
          Utils.fillAddressWithReceivedValues(this.clientLocation, locationInfo);
          this.searchElement.nativeElement.value = this.clientLocation.fullAddress;
      })

    );

  }



  save() {


    this.businessProfileService.saveClientWithLocation(this.client, this.clientLocation).then(
      (any =>{
        //this.clientCreatedEvent.emit("");
        this.clearData();
        $('#exampleModal').modal('hide');
        if(this.postAction!=null) {
          this.postAction();
        }
      })
    );

  }

  private prepareData() {
    console.log(this.client);
    if(this.client.id!=null) {
      this.editClientMode = true;
    } else {
      this.editClientMode = false;
      this.clearData();
    }

  }

  private clearData() {
    this.clientLocation = new ClientLocation();
    this.searchElement.nativeElement.value = "";

    this.client = new Client();

    this.clientLocation.longitude =24.114619400000038;
    this.clientLocation.latitude=56.9436762;

  }

  ngOnDestroy(): void {
    this.clientLocationEditDialogSubscription.unsubscribe();
  }

}
