import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTaskComponent } from './form-task.component';



@NgModule({
  declarations: [FormTaskComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FormTaskComponent
  ]
})
export class FormTaskModule { }
