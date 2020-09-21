import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list/list.component'
import { GroupListComponent } from './group-list/group-list.component';
import { FormTaskModule } from './form-task/form-task.module';
import { FormTaskComponent } from './form-task/form-task.component';



@NgModule({
  declarations: [ListComponent,GroupListComponent],
  imports: [
    CommonModule,
    FormTaskModule
  ],
  exports:[
    ListComponent,
    GroupListComponent,
    FormTaskComponent
  ],
 

})
export class SharedModule { }
