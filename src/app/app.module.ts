import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataServiceService } from './mock-db/in-memory-data-service.service';
import {MockDbModule} from './mock-db/mock-db.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {SharedModule} from 'src/app/shared/shared.module';
import { TabViewModule } from 'primeng/tabview';
import { LoginModule } from './login/login.module';
import { IAuthenticationService } from 'src/app/shared/authentication/authentication.contract';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/shared/authentication/authentication.service';
import {AuthenticationMockService} from  'src/app/shared/authentication/authenticationMock.service';
import { SpacesModule } from './spaces/spaces.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
   BrowserModule,
   BrowserAnimationsModule,
   AppRoutingModule,
   HttpClientModule,
   MockDbModule, 
   HttpClientInMemoryWebApiModule.forRoot(
     InMemoryDataServiceService, { dataEncapsulation: false,delay:1500 }),
   MatButtonModule,
   MatMenuModule,
   TabMenuModule,
   TabViewModule,
   SharedModule,
   LoginModule,
   SpacesModule
    
  ],
  providers:[
    {provide:IAuthenticationService, useClass:environment.production?AuthenticationService:AuthenticationMockService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
