import { Component, OnInit } from '@angular/core';
import {BusinessProfileService} from "../../business-profile.service";
import {BusinessPartner} from "../../../../../model/business-partner.class";
import {AuthService} from "../../../../../../shared/service/auth.service";

import {MyBusinessPartner} from "../../../../../model/my-business-partner.class";

@Component({
  selector: 'app-edit-business-partners-profile',
  templateUrl: './edit-my-business-partners.component.html',
  styleUrls: ['./edit-my-business-partners.component.css']
})
export class EditMyBusinessPartnersComponent implements OnInit {

  constructor(private businessPartnerProfileService: BusinessProfileService, private authService: AuthService) { }

  businessPartners: BusinessPartner[];
  myBusinessPartners: MyBusinessPartner[];
  private selectedBusinesParthnerId:number;



  ngOnInit() {
    this.businessPartnerProfileService.readAllBusinessPartners().then((businessPartners:BusinessPartner[]) => {
      this.businessPartners = businessPartners;
    });
    this.readMyBusinessPartners();
  }

  selectchange(args) {
    this.selectedBusinesParthnerId = +args.target.value;
  }

  isDisabled() : boolean {
    return this.selectedBusinesParthnerId==null;
  }

  assignMyBusinessPartner() {
    this.businessPartnerProfileService.assignMyBusinessPartner(this.selectedBusinesParthnerId).then(data=> {
          this.readMyBusinessPartners();
      }
    );
  }

  private removeMyBusinessPartner(myBusinessPartner: MyBusinessPartner) {
    this.businessPartnerProfileService.removeMyBusinessPartner(myBusinessPartner).then(data=> {
        this.readMyBusinessPartners();
      }
    );

  }


  private readMyBusinessPartners() {
    this.businessPartnerProfileService.findMyBusinessPartners().then((myBusinessPartners :  MyBusinessPartner[])  => {
      this.myBusinessPartners = myBusinessPartners;
      console.log(JSON.stringify(this.myBusinessPartners));
    });
  }



}
