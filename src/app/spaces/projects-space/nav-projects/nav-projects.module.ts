import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{TabProjectComponent} from './tab-project/tab-project.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {TabViewModule} from 'primeng/tabview';
import { TreeProjectComponent } from './tree-project/tree-project.component';

@NgModule({
  declarations: [TabProjectComponent,TreeProjectComponent],
  imports: [
    CommonModule,
    SharedModule,
    TabViewModule
  ],
  exports:[
    TabProjectComponent,
    TreeProjectComponent
  ],
 
})
export class NavProjectsModule { }
