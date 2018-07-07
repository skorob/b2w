import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../../shared/service/auth.service";

@Component({
  selector: 'app-non-logged-user-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
