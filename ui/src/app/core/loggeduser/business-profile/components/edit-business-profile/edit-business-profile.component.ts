import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../../../auth/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-business-profile',
  templateUrl: './edit-business-profile.component.html',
  styleUrls: ['./edit-business-profile.component.css']
})
export class EditBusinessProfileComponent implements OnInit {

  businessProfileForm: FormGroup;

  @Input()
  gotoHome:boolean = false;

  constructor(private authService:AuthService, private router: Router) {

  }

  registerLogisticProfileOption:boolean=false;
  registerDistributionProfileOption:boolean=false;


  ngOnInit() {
    let currentBusinessPartner = this.authService.getCurrentBusinessPartner();
    const businessProfileName = currentBusinessPartner ? currentBusinessPartner.name : "";
    this.businessProfileForm = new FormGroup({
      'businessProfileName': new FormControl(
        businessProfileName
        ,
        [Validators.required, Validators.maxLength(50)])
    });


    this.registerDistributionProfileOption =  currentBusinessPartner && currentBusinessPartner.distributorProfile &&  (currentBusinessPartner.distributorProfile.status=='ACTIVE');
    this.registerLogisticProfileOption = currentBusinessPartner && currentBusinessPartner.logisticProfile && (currentBusinessPartner.logisticProfile.status=='ACTIVE');
  }

  registerLogisticProfile() {
    this.registerLogisticProfileOption = !this.registerLogisticProfileOption;
  }

  registerDistributionProfile() {
    this.registerDistributionProfileOption = !this.registerDistributionProfileOption;
  }

  readyForActivation():boolean {
    return  !(this.registerDistributionProfileOption || this.registerLogisticProfileOption);
  }

  onActivate() {
    const businessProfileName =  this.businessProfileForm.value.businessProfileName;
    let activationConfig:any={};
    activationConfig.businessProfileName = businessProfileName;
    if(this.authService.getCurrentBusinessPartner()) {
      activationConfig.businessPartnerId = this.authService.getCurrentBusinessPartner().id;
    }
    let activationProfiles=[];

    if(this.registerDistributionProfileOption) {
      activationProfiles.push('DISTRIBUTION');
    }

    if(this.registerLogisticProfileOption) {
      activationProfiles.push('LOGISTIC');
    }

    if(activationProfiles.length>0) {
      activationConfig["businessProfileTypes"]=activationProfiles;
    }

    this.authService.activate(activationConfig).then(
      data=> {
        this.authService.readApplicationUser().then( data=> {
          if(this.gotoHome) {
            this.router.navigate(['/home']);
          }
        });
      }
    );

  }



}
