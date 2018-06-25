import { Component, OnInit } from '@angular/core';
import {BusinessPartnerProfileService} from "../../business-profile.service";
import {BusinessPartner} from "../../../../../model/business-partner.class";
import {AuthService} from "../../../../../auth/auth.service";
import {ApplicationUserBusinessProfile} from "../../../../../model/app-user-business-partner.class";
import {MyBusinessPartner} from "../../../../../model/my-business-partner.class";

@Component({
  selector: 'app-edit-business-profile',
  templateUrl: './edit-business-partner-profile.component.html',
  styleUrls: ['./edit-business-partner-profile.component.css']
})
export class EditBusinessPartnerProfileComponent implements OnInit {

  constructor(private businessPartnerProfileService: BusinessPartnerProfileService, private authService: AuthService) { }

  private businessPartners: BusinessPartner[];
  private selectedBusinesParthnerId:number;

  private myBusinessPartners: MyBusinessPartner[];

  ngOnInit() {
    this.businessPartnerProfileService.readAllBusinessPartners().then((businessPartners:BusinessPartner[]) => {
      this.businessPartners = businessPartners;
    });
  }

  private selectchange(args) {
    this.selectedBusinesParthnerId = +args.target.value;
  }

  private isDisabled() : boolean {
    return this.selectedBusinesParthnerId==null;
  }

  private assignMyBusinessPartner() {
    this.businessPartnerProfileService.assignMyBusinessPartner(this.selectedBusinesParthnerId).then(data=> {
          this.businessPartnerProfileService.findMyBusinessPartners().then((myBusinessPartners :  MyBusinessPartner[])  => {
            this.myBusinessPartners = myBusinessPartners;
            console.log(JSON.stringify(this.myBusinessPartners));
          });
      }
    );
  }

}
