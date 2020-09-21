import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacesComponent } from './spaces.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileSpaceModule } from './profile-space/profile-space.module';
import { ProjectsSpaceModule } from './projects-space/projects-space.module';
import { SettingSpaceModule } from './setting-space/setting-space.module';
import { MenuBarComponent } from 'src/components/menu-bar/menu-bar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { SpaceRoutingModule } from './spaces-routing.module';



@NgModule({
  declarations: [SpacesComponent,MenuBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileSpaceModule,
    ProjectsSpaceModule,
    SettingSpaceModule,
    TabMenuModule,
    TabViewModule,
    SpaceRoutingModule
  ],
  exports:[SpacesComponent]
})
export class SpacesModule { }
