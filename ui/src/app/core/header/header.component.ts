import {Component} from '@angular/core';
import {AuthService} from "../../auth/auth.service";



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
  }
)


export class HeaderComponent {
  constructor(private authService:AuthService) { }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }


  logout() {
    this.authService.logout();
  }

}


