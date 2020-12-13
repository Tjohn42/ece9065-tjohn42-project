import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRolesGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("EHYYY",localStorage.getItem('access_token'), localStorage.getItem('admin'));
    
    if (localStorage.getItem('access_token') && localStorage.getItem('admin')=="1") {   
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}


