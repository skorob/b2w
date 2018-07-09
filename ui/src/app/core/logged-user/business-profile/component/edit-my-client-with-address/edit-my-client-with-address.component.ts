import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MapsAPILoader} from "@agm/core";
import {} from '@types/googlemaps';
import {Address} from "../../../../../model/address.class";
import {Utils} from "../../../../../utils/utils.class";
import {GEOService} from "../../../../../../shared/service/geo.service";


@Component({
  selector: 'edit-my-client-with-adress',
  templateUrl: './edit-my-client-with-address.component.html',
  styleUrls: ['./edit-my-client-with-address.component.css'],
})
export class EditMyClientWithAddressComponent implements OnInit {


  address: Address;

  public searchControl: FormControl;

  @ViewChild('search')
  public searchElement: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private geoService:GEOService
  ) {
    this.address = new Address();
    this.address.longitude =24.114619400000038;
    this.address.latitude=56.9436762;
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
            this.address.longitude = place.geometry.location.lng();
            this.address.latitude = place.geometry.location.lat();
            this.address.postCode = Utils.extractValueFrom(place, Utils.GEO_POST_CODE);
            this.address.house = Utils.extractValueFrom(place, Utils.GEO_HOUSE);
            this.address.city=Utils.extractValueFrom(place, Utils.GEO_CITY);
            this.address.street = Utils.extractValueFrom(place, Utils.GEO_STREET);
            this.address.country= Utils.extractValueFrom(place, Utils.GEO_COUNTRY);
            this.address.fullAddress = this.searchElement.nativeElement.value;
            console.log(place);
            console.log(this.address.longitude, this.address.latitude);
          });
        });
      }
    );


  }

  placeMarker($event) {
    console.log($event)
    this.address.latitude = $event.coords.lat;
    this.address.longitude = $event.coords.lng;
    this.geoService.readGEOInfoByLangLat(this.address.latitude,this.address.longitude).then(
      ((locationInfo:any)=>{
          Utils.fillAddressWithReceivedValues(this.address, locationInfo);
          this.searchElement.nativeElement.value = this.address.fullAddress;
      })

    );

  }



  save() {

  }

}
