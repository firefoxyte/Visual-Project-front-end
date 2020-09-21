import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskUpdaterComponent } from './task-updater.component';



@NgModule({
  declarations: [TaskUpdaterComponent],
  imports: [
    CommonModule
  ],
  exports:[TaskUpdaterComponent]
})
export class TaskUpdaterModule { }
