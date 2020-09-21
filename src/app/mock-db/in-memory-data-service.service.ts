import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'any'
})
export class InMemoryDataServiceService implements InMemoryDbService {

  createDb(){

  let tasks =[
    {id:1, parent_id:null,project_id:1,name:"project name",description:"proj desc",duration:"1H",start:"1998-01-02 00:00:00.000",end:"1998-01-02 1:00:00.000",band:1,created:"1998-01-01 00:00:00.000",creator:1,ended:false,color:"red",tags:["tag1","tag2","creme fraiche"],logo:""},
    {id:2, parent_id:1,project_id:1,name:"sub task1",description:"proj desc",duration:"1H",start:"1998-01-02 00:00:00.000",end:"1998-01-02 1:00:00.000",band:1,created:"1998-01-01 00:00:00.000",creator:1,ended:false,color:"red",tags:["tag1","tag2","creme fraiche"],logo:""},
  
  ];

  let users =[
    { id:1, name:"bidule",mail:"much@t.com",password:"a"}
  ]

  let rights =[
    "delete_task",
    "update_task",
    "create_task",
    "add_people",
    "delete_people",
    "update_rights"
  ];

  let band =[
    {id:1,id_user:1,rights:[ "create_task","update_task", "update_task"]}
  ];
  return{users,tasks,band,rights};
  }
  constructor() { }
}
