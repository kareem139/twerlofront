import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../shared/service/account.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private service:AccountService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (localStorage.getItem('token')!=null) {

        let roles=next.data['permittedRoles'] as Array<string>;
        if (roles)
        {
          if (this.service.roleMatch(roles))
          {
            return true;
          }
          else
          {
            this.router.navigateByUrl('/user/signin');
            return false;
          }

        }
        return true;
      }
      else
      {
        // this.router.navigateByUrl('/fisrthome/home')
        return false;
      }

  }



}