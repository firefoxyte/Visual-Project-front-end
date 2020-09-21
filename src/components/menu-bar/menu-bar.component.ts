import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { IAuthenticationService } from 'src/app/shared/authentication/authentication.contract';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  
  items: MenuItem[];
  activeItem: MenuItem;
  constructor(private router:Router,private authService:IAuthenticationService){ 
    
  }

  ngOnInit(): void {
    this.items = [
      {label: 'Projects', icon: 'pi pi-fw pi-calendar',routerLink:'projects'},
      {label: 'Profile', icon: 'pi pi-fw pi-users',routerLink:'profile'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog',routerLink:'settings'}
  ];
  
  this.activeItem = this.items.find( elt => elt.label == 'Projects');
  }

}
