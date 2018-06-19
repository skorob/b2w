
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {HttpClientModule, HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {getToken} from "@angular/compiler/src/css_parser/css_lexer";
import {ApplicationUser} from "../model/application-user.class";


@Injectable()
export class AuthService {


  constructor(private router: Router, private http: HttpClient) {

  }

  signup(login: string, password: string) {
    return this.http.post('/api/auth/sign-up', {
      login: login,
      password: password
    });
  }

  readApplicationUser():Promise<ApplicationUser> {
     return this.http.get<ApplicationUser>('/api/getappuser').toPromise<ApplicationUser>()
       .then(((appUser:ApplicationUser)=>{
         localStorage.setItem("appUser", JSON.stringify(appUser));
         return appUser;
       }));
  }

  signin(login: string, password: string ) : Observable<HttpResponse<any>> {
    return this.http.post('/login', {
      login: login,
      password: password
    }, { observe: 'response' });
  }

  getToken() {
    return localStorage.getItem('app_token');;
  }

  setToken(token:string) {
    localStorage.setItem('app_token', token);
  }

  isAuthenticated() {
    return this.getToken()!=null;
  }


  logout() {
    localStorage.removeItem('app_token');
  }

}
