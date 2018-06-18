
import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Injectable()
export class ErrorHandlerService {

  handleHttpError(errorResponse: any, formGroup: FormGroup) {

    if(errorResponse.error) {
        const fieldName = errorResponse.error.fieldName;
        const errorCode = errorResponse.error.errorCode;

        let error={};
        error[errorCode]=true;
        formGroup.controls[fieldName].setErrors(error);
    }
  }


  handleInvalidLoginPassword(errorResponse: any, formGroup: FormGroup) {
    let error={invalidLoginPassword:true};
    formGroup.controls['login'].setErrors(error);
  }

}
