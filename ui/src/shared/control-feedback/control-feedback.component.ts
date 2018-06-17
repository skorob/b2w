import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";

import {FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {AbstractControl} from "@angular/forms";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {ViewChild} from "@angular/core";
import {ElementRef} from "@angular/core";

@Component({
  selector: 'control-feedback',
  templateUrl: './control-feedback.component.html',
  styles: ['.is-invalid1  .form-control { border-color: #dc3545;  }']
})
export class ControlFeedbackComponent implements  OnInit {


  @Input()
  labelText: string;

  @Input()
  formGroup:FormGroup;

  @Input()
  controlName: string;

  @Input()
  errorDefs:any;



  message: string;

  isInvalid: boolean;

  private currentControl:AbstractControl;

  constructor() { }

  ngOnInit():void {


    this.isInvalid =this.formGroup.controls[this.controlName].invalid  && (this.formGroup.controls[this.controlName].touched || this.formGroup.controls[this.controlName].dirty);

    this.currentControl = this.formGroup.controls[this.controlName];
    this.changeCss();

    this.currentControl.statusChanges.subscribe(() => {


      if(this.currentControl.errors) {
        document.getElementById(this.controlName).classList.add('is-invalid');
        this.isInvalid = true;
        this.changeCss();
        if(this.errorDefs == null) {
          this.message =  "Unknown Message Key: "+Object.keys(this.currentControl.errors)[0] ;
          return;
        }
        Object.keys(this.errorDefs).some(key => {
          if (this.currentControl.errors[key]) {
            this.message = this.errorDefs[key];
            return true;
          } else {
            this.message = "Unknown Message for the key: "+key;
            return true;
          }
        });
      } else {
        this.isInvalid=false;
        this.changeCss();
      }
    });

  }

  private changeCss() {
    if(this.isInvalid) {
      document.getElementById(this.controlName).classList.add('is-invalid');
    }  else {
      document.getElementById(this.controlName).classList.remove('is-invalid');
  }
}



}
