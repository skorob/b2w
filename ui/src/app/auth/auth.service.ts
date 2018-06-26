
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {HttpClientModule, HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {getToken} from "@angular/compiler/src/css_parser/css_lexer";
import {ApplicationUser} from "../model/application-user.class";
import {BusinessPartner} from "../model/business-partner.class";


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
     return this.http.get<ApplicationUser>('/api/app-user/get').toPromise<ApplicationUser>()
       .then(((appUser:ApplicationUser)=>{
         localStorage.setItem("App-User", JSON.stringify(appUser));
         if(appUser.businessPartners.length>0) {
           localStorage.setItem("Business-Partner", JSON.stringify(appUser.businessPartners[0].businessPartner));
         }
         return appUser;
       }));
  }

  signin(login: string, password: string ) : Promise<void> {
    return this.http.post('/login', {
      login: login,
      password: password
    }, { observe: 'response' }).toPromise().
      then((data:HttpResponse<any>) => {
      if(data.headers.has("Auth-Token")) {
        this.setToken(data.headers.get("Auth-Token"));
        console.log("Current Token : "+this.getToken())
      }
      return;
    });
  }

  getCurrentBusinessPartner():BusinessPartner {
    return  JSON.parse(localStorage.getItem("Business-Partner"));
  }

  getAppUser():ApplicationUser {
    return  JSON.parse(localStorage.getItem("App-User"));
  }


  getToken() {
    return localStorage.getItem('Auth-Token');;
  }

  setToken(token:string) {
    localStorage.setItem('Auth-Token', token);
  }

  isAuthenticated() {
    return this.getToken()!=null;
  }


  logout() {
    localStorage.removeItem('Auth-Token');
    localStorage.removeItem('Auth-User');
    localStorage.removeItem('Business-Partner');
  }


  activate(activationConfig:any):Promise<Object> {
    return this.http.post('/api/profile/activate', activationConfig).toPromise();
  }


}
