import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import * as EventEmitter from "eventemitter3";
import {Observable} from "rxjs/internal/Observable";
import {SubjectSubscriber} from "rxjs/internal/Subject";
import {Subscriber} from "rxjs/internal-compatibility";
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


