import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User/user.model';
import { IAuthenticationService } from './authentication.contract';

@Injectable({
  providedIn: 'any'
})
export class AuthenticationService implements IAuthenticationService {

  private token:string
  constructor(){ }
  getToken():string{
    return ''
  }
  logIn(id:string,pwd:string):Observable<User>{
    return new Observable<User>()
  }
  logout():void{

  }
  
  isValidToken():boolean{
    return true
  }
}
