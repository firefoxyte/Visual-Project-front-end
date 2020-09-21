import { Route } from '@angular/compiler/src/core';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, RouterStateSnapshot, UrlSegment } from '@angular/router';


@Injectable({
    providedIn: 'any'
})
export class UserGuard implements CanLoad,CanActivate,CanActivateChild{

    canLoad(route: Route, segments: UrlSegment[]){
        return true
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return true
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return true
    }
}