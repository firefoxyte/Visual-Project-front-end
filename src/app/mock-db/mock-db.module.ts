import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryDataServiceService } from './in-memory-data-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[

  ],
  providers:[
    InMemoryDataServiceService
  ]
})
export class MockDbModule { }
