import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ControlFeedbackComponent} from './component/control-feedback/control-feedback.component';
import {ErrorHandlerService} from "./service/error-handler.service";
import {TokenInterceptor} from "../app/core/non-loggeduser/sign-up-sign-in/token-interceptor";
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {DropdownDirective} from "./directive/dropdown.directive";
import {AuthService} from "./service/auth.service";

@NgModule({
  declarations: [ControlFeedbackComponent, DropdownDirective],
  imports: [
      CommonModule],
  exports: [
    CommonModule,
    ControlFeedbackComponent,
    DropdownDirective
  ],
  providers: [ErrorHandlerService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }, AuthService],
  bootstrap: []
})
export class SharedModule { }
