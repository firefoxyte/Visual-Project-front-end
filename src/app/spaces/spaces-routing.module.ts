import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment, UrlMatchResult, UrlSegmentGroup } from '@angular/router';
import { ProjectsSpaceComponent } from './projects-space/projects-space.component';
import { SettingsComponent } from './setting-space/settings/settings.component';
import { ProfileComponent } from './profile-space/profile/profile.component';
import { SpacesComponent } from './spaces.component';
import { Route } from '@angular/compiler/src/core';

 
export function urlmatch(Currentsegments: UrlSegment[], group: UrlSegmentGroup, route: Route):UrlMatchResult | null{
  let segments: UrlSegment[] = group.segments
  console.log(segments,group,route)
  if((segments.length == 2 && segments[0].path =='user' && segments[1].path == 'spaces')||
  (segments.length == 1 && segments[0].path =='spaces'))
  return {consumed:[new UrlSegment('spaces',{})]}

  return null
}


const routesSpaces: Routes = [
  //{pathMatch:'full',matcher:urlmatch,component:SpacesComponent,
  {path:'spaces',component:SpacesComponent,
    children:[
        { path:'projects',component: ProjectsSpaceComponent},
        { path:'settings',component: SettingsComponent},
        { path:'profile',component: ProfileComponent}
      ]
    },
  //{path:'', redirectTo:'spaces',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routesSpaces)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
