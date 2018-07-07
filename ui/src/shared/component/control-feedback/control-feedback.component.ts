import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";

import {FormGroup} from "@angular/forms";
import {AbstractControl} from "@angular/forms";
import {OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'control-feedback',
  templateUrl: './control-feedback.component.html',
  styles: ['.is-invalid1  .form-control { border-color: #dc3545;  }']
})
export class ControlFeedbackComponent implements OnInit, OnDestroy {

  @Input()
  labelText:string;

  @Input()
  formGroup:FormGroup;

  @Input()
  controlName:string;

  @Input()
  errorDefs:any;

  message:string;

  isInvalid:boolean;

  private currentControl:AbstractControl;

  private subscribtion: Subscription;

  constructor() {
  }

  ngOnInit():void {
    this.isInvalid = this.formGroup.controls[this.controlName].invalid && (this.formGroup.controls[this.controlName].touched || this.formGroup.controls[this.controlName].dirty);
    this.changeCss();
    this.initCurrentControlListener();
  }

  ngOnDestroy():void {
    this.subscribtion.unsubscribe();
  }

  initCurrentControlListener() {
    this.currentControl = this.formGroup.controls[this.controlName];

    this.subscribtion = this.currentControl.statusChanges.subscribe(() => {

      if (this.currentControl.errors) {
        this.isInvalid = true;
        this.changeCss();

        if (this.errorDefs == null) {
          this.message = "Unknown Message Key: " + Object.keys(this.currentControl.errors)[0];
          return;
        }

        const messageForKeyIsFound = Object.keys(this.errorDefs).some(key => {
          if (this.currentControl.errors[key]) {
            this.message = this.errorDefs[key];
            for (var subMessageKey in this.currentControl.errors[key]) {
              this.message = this.message.replace("{"+subMessageKey+"}", this.currentControl.errors[key][subMessageKey] )
            }

            return true;
          }
        });

        if (!messageForKeyIsFound) {
          this.message = "Not Found messages : " + JSON.stringify(this.currentControl.errors);
        }
      } else {
        this.isInvalid = false;
        this.changeCss();
      }
    });
  }

  private changeCss() {
    if (this.isInvalid) {
      document.getElementById(this.controlName).classList.add('is-invalid');
    } else {
      document.getElementById(this.controlName).classList.remove('is-invalid');
    }
  }

}
