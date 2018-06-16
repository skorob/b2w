
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) {

  }


  signup(login: string, password: string) {

  }

  signin(login: string, password: string ) {

  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token!=null;
  }


  logout() {
    this.token = null;
  }

}
