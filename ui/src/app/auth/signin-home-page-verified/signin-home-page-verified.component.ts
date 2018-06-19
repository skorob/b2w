import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-home-page-verified',
  templateUrl: './signin-home-page-verified.component.html',
  styleUrls: ['./signin-home-page-verified.component.css']
})
export class SigninHomePageVerifiedComponent implements OnInit {

  constructor() { }


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

}
