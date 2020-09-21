import { Component, OnInit } from '@angular/core';
import { IAuthenticationService } from '../shared/authentication/authentication.contract';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ValidatorFunctionsService } from '../validators/validatorFunctions';
import { Observable } from 'rxjs';
import { User } from '../shared/User/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm:FormGroup =new FormGroup({
    email:new FormControl('no@user.com',[Validators.required,Validators.email]),
    password:new FormControl('password',Validators.required)
  });
  constructor(private authService:IAuthenticationService,private ValidatorFS:ValidatorFunctionsService){ 
    console.log(LoginComponent.name)
  }
  ngOnInit(): void {
    console.log(LoginComponent.name)
  }

  onSubmit(){
    console.log(this.loginForm)
    let sub = this.authService.logIn(this.loginForm.get("email").value,this.loginForm.get("password").value).subscribe(
      {
        next:elt=>{
            console.log(elt,"next")
        },
        error:err=>{
            console.log(err,"err")
        }
      }
    )

  }

  get email(){ return this.loginForm.get('email')}
}
