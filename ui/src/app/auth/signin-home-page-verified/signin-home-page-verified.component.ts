import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-signin-home-page-verified',
  templateUrl: './signin-home-page-verified.component.html',
  styleUrls: ['./signin-home-page-verified.component.css']
})
export class SigninHomePageVerifiedComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }


  registerLogisticProfileOption:boolean=false;
  registerDistributionProfileOption:boolean=false;


  ngOnInit() {
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

  activate() {
    let activationConfig:any={};

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
          this.router.navigate(['/logged-user-home']);
        });
      }
    );

  }

}
