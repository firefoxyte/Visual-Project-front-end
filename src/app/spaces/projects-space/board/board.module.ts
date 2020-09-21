import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { TabViewModule } from 'primeng/tabview';
import { GroupMakerModule } from './group-maker/group-maker.module';
import { BoardTreeComponent } from './board-tree/board-tree.component';



@NgModule({
  declarations: [BoardComponent,BoardComponent,BoardTreeComponent],
  imports: [
    CommonModule,
    TabViewModule,
    GroupMakerModule,
  ],
  exports:[BoardComponent,BoardTreeComponent]
})
export class BoardModule { }
