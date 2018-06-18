
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {HttpClientModule, HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/index";


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

  getCar() {
    return this.http.get('/api/getcar');
  }

  signin(login: string, password: string ) : Observable<HttpResponse<any>> {
    return this.http.post('/login', {
      login: login,
      password: password
    }, { observe: 'response' });
  }

  getToken() {
    return this.token;
  }

  setToken(token:string) {
    this.token = token;
  }

  isAuthenticated() {
    return this.token!=null;
  }


  logout() {
    this.token = null;
  }

}
