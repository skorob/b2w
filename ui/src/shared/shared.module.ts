import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ControlFeedbackComponent} from './control-feedback/control-feedback.component';
import {ErrorHandlerService} from "./error-handler.service";
import {TokenInterceptor} from "../app/auth/token-interceptor";
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [ControlFeedbackComponent],
  imports: [
      CommonModule],
  exports: [
    CommonModule,
    ControlFeedbackComponent
  ],
  providers: [ErrorHandlerService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }],
  bootstrap: []
})
export class SharedModule { }
