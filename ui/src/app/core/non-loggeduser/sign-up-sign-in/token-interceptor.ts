import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import {AuthService} from "../../../../shared/service/auth.service";
import {Observable} from "rxjs/index";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(!request.url.includes("googleapis")) {

      request = request.clone({
        setHeaders: {
          "Auth-Token": `${this.auth.getToken()}`
        }
      });
    }
    return next.handle(request);
  }
}
