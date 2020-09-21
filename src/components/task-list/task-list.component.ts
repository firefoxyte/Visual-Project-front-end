import { Component, OnInit, OnChanges } from '@angular/core';
import { TaskService } from '../../app/shared/services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  
})
export class TaskListComponent implements OnInit,OnChanges {

  public list: Task[] =[];
  public user:any[]=[];
  public count =0;
  constructor(private  taskService: TaskService) { 
      let sub = taskService.getTasks().subscribe({
        next:(tasks)=> {
          this.list = tasks;
          let sub1 = taskService.getUsers().subscribe({
            next:(users)=>{
              this.user = users
              console.log("users")
            }
          })
          console.log('response tasks',tasks);
        }
      });

      let sub1 = taskService.getCount().subscribe({
        next:(c) =>{
          this.count = c;
        }
      })
  }

  ngOnInit(): void {
    console.log('TaskListComponent',Function.name);
  }
 
  ngOnChanges():void{
    console.log("onchange",this.list);
  }
  
  ngAfterContentChecked()	
  {
    console.log("ngAfterContentChecked",this.list,this.count);
    
  } 
  ngDoCheck(){
    console.log("ngDoCheck",this.list)
  }
  ngOnDestroy(){
    console.log("ngOnDestroy",this.list)
  }
}
