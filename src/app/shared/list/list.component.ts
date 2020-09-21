import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
 
})
export class ListComponent implements OnInit {

  public count =0;
  constructor(private taskService:TaskService) { 
    let sub = taskService.getCount().subscribe({
      next:(c) =>{
        this.count  = c;
      }

    });
  }

  ngOnInit(): void {
  }
  add(){
    let sub = this.taskService.getCount().subscribe({
      next:(c) =>{
        this.count  = c;
        console.log(c);
      }

    });
  
  }

}
