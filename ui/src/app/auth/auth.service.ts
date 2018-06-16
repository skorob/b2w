
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {HttpClientModule, HttpClient} from "@angular/common/http";



@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router, private http: HttpClient) {

  }

  signup(login: string, password: string) {
    return this.http.post('/api/auth/sign-up', {
      login: login,
      password: password
    });
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
