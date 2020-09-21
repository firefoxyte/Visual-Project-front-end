import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
    providedIn:'any',
  })
export class ValidatorFunctionsService{
    constructor(){}

     forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
          
          const forbidden = nameRe.test(control.value);
          
          return forbidden ? {forbiddenName: {value: "no",invalid:true}} :null;
        };
    }

}