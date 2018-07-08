import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MapsAPILoader} from "@agm/core";
import {} from '@types/googlemaps';
import {Address} from "../../../../../model/address.class";
import {Utils} from "../../../../../utils/utils.class";

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
    private ngZone: NgZone
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
            this.address.postCode = Utils.extractValueFrom(place,"postal_code");
            this.address.house = Utils.extractValueFrom(place,"street_number");
            this.address.city=Utils.extractValueFrom(place,"locality");
            this.address.street = Utils.extractValueFrom(place,"route");
            this.address.country= Utils.extractValueFrom(place,"country");
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
  }


}
