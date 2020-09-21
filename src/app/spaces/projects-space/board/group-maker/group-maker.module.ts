import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupMakerComponent } from './group-maker.component';



@NgModule({
  declarations: [GroupMakerComponent],
  imports: [
    CommonModule
  ],
  exports:[
    GroupMakerComponent
  ]
})
export class GroupMakerModule { }
