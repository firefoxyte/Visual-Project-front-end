import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import {PasswordModule} from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { ValidatorsModule } from '../validators/validators.module';
import { ValidatorFunctionsService } from '../validators/validatorFunctions';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    PasswordModule,
    ReactiveFormsModule,
    InputTextModule,
    ValidatorsModule,
    ButtonModule
  ],
  exports:[
    LoginComponent
  ],
  providers:[
    ValidatorFunctionsService
  ]
})
export class LoginModule { }
