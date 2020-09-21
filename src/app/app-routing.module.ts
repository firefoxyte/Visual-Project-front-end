import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GuardsModule } from './Helpers/Guards/guards.module';
import { UserGuard } from './Helpers/Guards/User.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './spaces/profile-space/profile/profile.component';
import { ProjectsSpaceComponent } from './spaces/projects-space/projects-space.component';
import { SettingsComponent } from './spaces/setting-space/settings/settings.component';
import { SpacesComponent } from './spaces/spaces.component';



const routes: Routes = [
  { path:'root',component: AppComponent},
  /*{ path:'user',component: SpacesComponent,canActivate:[UserGuard], children:[
      { path:'projects',component: ProjectsSpaceComponent,pathMatch:'full'},
      { path:'settings',component: SettingsComponent},
      { path:'profile',component: ProfileComponent}
    ]},*/
  { path:'user',canLoad:[UserGuard], loadChildren:'./spaces/spaces.module#SpacesModule'},
  { path:'login',canActivate:[UserGuard],component:LoginComponent},
  //{ path:'',redirectTo:'spaces',pathMatch:'full'},
  { path:'**',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),GuardsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
