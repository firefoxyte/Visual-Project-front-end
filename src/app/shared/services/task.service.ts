import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../../../models/task.model';


@Injectable({
  providedIn:'any',
  
})
export class TaskService {

  private taskUrl ="api/tasks";
  private usersUrl='api/users';
  private count = 0;
  constructor( private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.taskUrl);
  }

  getCount(): Observable<number>{
    this.count++;
    return of(this.count);
  }
  getUsers():Observable<any[]>{
    return this.http.get<any[]>(this.usersUrl);
  }
}
 