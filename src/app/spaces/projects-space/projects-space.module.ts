import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsSpaceComponent } from './projects-space.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [ProjectsSpaceComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ProjectsSpaceComponent
  ]

})
export class ProjectsSpaceModule { }
