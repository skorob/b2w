

import { HttpClient, HttpResponse} from "@angular/common/http";

import {BusinessPartner} from "../../../../model/business-partner.class";
import {AuthService} from "../../../../../shared/service/auth.service";
import {MyBusinessPartner} from "../../../../model/my-business-partner.class";
import {Client} from "../../../../model/client.class";
import {ClientLocation} from "../../../../model/client-location.class";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/internal/Subject";
import {ClientClientLocationUpdate} from "../model/client-clinet-location-update.class";


@Injectable()
export class BusinessProfileService {




  constructor( private http: HttpClient, private authService:AuthService) {

  }





  readAllBusinessPartners() :Promise<BusinessPartner[]> {
     return this.http.get<BusinessPartner[]>('/api/business-partner/all').toPromise<BusinessPartner[]>()
       .then(((businessPartners:BusinessPartner[])=>{
         return businessPartners;
       }));
  }


  findMyBusinessPartners():Promise<MyBusinessPartner[]> {

    const  currentBusinessPartner:BusinessPartner = this.authService.getCurrentBusinessPartner();

    return this.http.get<MyBusinessPartner[]>('/api/business-partner/find-my-business-partners/'+currentBusinessPartner.id).toPromise<MyBusinessPartner[]>();
  }


  assignMyBusinessPartner(myBusinessPartnerId:number) {
     const  currentBusinessPartner:BusinessPartner = this.authService.getCurrentBusinessPartner();

    return this.http.post('/api/business-partner/assign-my-business-partner', {
      businessPartner: {id : currentBusinessPartner.id},
      myBusinessPartner: {id: myBusinessPartnerId }
    }, { observe: 'response' }).toPromise().
    then((data:HttpResponse<any>) => {

      console.log("User is assigned");
    });

  }


  removeMyBusinessPartner(myBusinessPartner: MyBusinessPartner) {
    return this.http.post('/api/business-partner/remove-my-business-partner', {
      businessPartner : myBusinessPartner.businessPartner,
      myBusinessPartner : myBusinessPartner.myBusinessPartner
    }, { observe: 'response' }).toPromise().
    then((data:HttpResponse<any>) => {
      console.log("Remove ny business partner");
    });
  }

  saveClientWithLocation(client:Client, clientLocation:ClientLocation) {
    return this.http.post('/api/client/save', {
      businessPartnerId : this.authService.getCurrentBusinessPartner().id,
      client : client,
      clientLocation : clientLocation
    }, { observe: 'response' }).toPromise().
    then((data:HttpResponse<any>) => {
      console.log("client saved");
    });
  }


  findMyClients(searchName:string):Promise<Client[]> {

    const  currentBusinessPartner:BusinessPartner = this.authService.getCurrentBusinessPartner();

    return this.http.get<Client[]>('/api/client/find-all-for-business-partner/'+currentBusinessPartner.id+"/"+searchName).toPromise<Client[]>();
  }

  findMyClientById(clientId:number):Promise<Client> {

    const  currentBusinessPartner:BusinessPartner = this.authService.getCurrentBusinessPartner();

    return this.http.get<Client>('/api/client/find/'+clientId).toPromise<Client>();
  }



  removeMyClient(clientId: number) {
    return this.http.get<void>('/api/client/remove/'+clientId).toPromise<void>();
  }

  removeMyClientLocation(clientLocationId: number) {
    return this.http.get<void>('/api/client-location/remove/'+clientLocationId).toPromise<void>();
  }




}
