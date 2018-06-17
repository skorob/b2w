import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ControlFeedbackComponent} from './control-feedback/control-feedback.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [ControlFeedbackComponent],
  imports: [
      CommonModule],
  exports: [
    CommonModule,
    ControlFeedbackComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
