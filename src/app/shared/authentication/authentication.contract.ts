import { Observable } from 'rxjs';
import { User } from '../User/user.model';

export abstract class IAuthenticationService{
     abstract getToken():string
     abstract logIn(id:string,pwd:string):Observable<User>
     abstract logout():void
     abstract isValidToken():boolean
     
} 