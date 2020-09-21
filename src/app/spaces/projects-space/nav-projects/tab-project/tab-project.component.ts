import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/services/task.service';


@Component({
  selector: 'app-tab-project',
  templateUrl: './tab-project.component.html',
  styleUrls: ['./tab-project.component.css']
})
export class TabProjectComponent implements OnInit {

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
