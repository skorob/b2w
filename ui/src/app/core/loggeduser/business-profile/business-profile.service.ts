
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {HttpClientModule, HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {getToken} from "@angular/compiler/src/css_parser/css_lexer";

import {BusinessPartner} from "../../../model/business-partner.class";
import {AuthService} from "../../../auth/auth.service";
import {ApplicationUser} from "../../../model/application-user.class";
import {MyBusinessPartner} from "../../../model/my-business-partner.class";


@Injectable()
export class BusinessPartnerProfileService {


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
}
