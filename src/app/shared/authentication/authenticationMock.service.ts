import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Errors } from '../Error.enum';
import { User } from '../User/user.model';
import { IAuthenticationService } from './authentication.contract';

@Injectable({
  providedIn: 'any'
})
export class AuthenticationMockService implements IAuthenticationService {

  private token:string = null
  constructor(){ }
  getToken():string{
    return this.token;
  }
  logIn(id:string,pwd:string):Observable<User>{
    let user = null;

    if(id=='user@user.com' &&pwd=='password')
    {
      user =  new User();
      this.token = 'token';
    }
    if(id=='no@user.com' &&pwd=='password')
      user=  new Observable(sub => this.notFoundUser(sub))
      
    if(id=='out@user.com' &&pwd=='password')
      user= new Observable(sub => this.outTime(sub))
      
      
    return user
    }
  logout():void{
    this.token =null;
  }
 
  isValidToken():boolean{
    return this.token == null?false:true;
  }

  notFoundUser(observer){
    observer.error(new Error('No User').name=Errors.NOT_FOUND_USER);
      
  }

  outTime(observer){
    observer.error(new Error('Out time server response').name=Errors.SERVER_NO_RESPONSE);  
  }
}
