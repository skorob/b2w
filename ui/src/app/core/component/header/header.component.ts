import {Component, Injectable, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../../shared/service/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
  }
)



export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private authService:AuthService, private router: Router) { }


  profileName:string;

  profileNameSubscriber:Subscription;


  ngOnInit(): void {
      this.profileNameSubscriber = this.authService.getUserProfileNameObservable().subscribe(profileName => {
          this.profileName = profileName;
      } );
    let currentBusinessPartner = this.authService.getCurrentBusinessPartner();
    if(currentBusinessPartner) {
      this.profileName = currentBusinessPartner.name;
    } else {
      this.profileName = "";
    }
  }



  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.profileNameSubscriber.unsubscribe();
  }








}


