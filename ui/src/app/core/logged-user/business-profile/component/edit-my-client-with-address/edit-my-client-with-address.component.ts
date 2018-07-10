import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MapsAPILoader} from "@agm/core";
import {} from '@types/googlemaps';
import {ClientLocation} from "../../../../../model/client-location.class";
import {Utils} from "../../../../../utils/utils.class";
import {GEOService} from "../../../../../../shared/service/geo.service";
import {BusinessProfileService} from "../../business-profile.service";
import {Client} from "../../../../../model/client.class";


@Component({
  selector: 'edit-my-client-with-adress',
  templateUrl: './edit-my-client-with-address.component.html',
  styleUrls: ['./edit-my-client-with-address.component.css'],
})
export class EditMyClientWithAddressComponent implements OnInit {


  client: Client;
  clientLocation: ClientLocation;

  public searchControl: FormControl;

  @ViewChild('search')
  public searchElement: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private geoService:GEOService,
    private businessProfileService:BusinessProfileService
  ) {
    this.clientLocation = new ClientLocation();
    this.clientLocation.longitude =24.114619400000038;
    this.clientLocation.latitude=56.9436762;

    this.client = new Client();
  }

  ngOnInit() {

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
    this.businessProfileService.saveClientWithLocation(this.client, this.clientLocation);
  }

}
