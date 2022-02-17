import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private mainurl:UrlService,private http:HttpClient) { }

  LoginReq(data:any)
  {
    console.log();
    
    return this.http.post(this.mainurl._mainurl+'Account/Login',data);
  }

  // check on Role for user
  roleMatch(allowRoles:any):boolean
  {
      var isMatch=false;
      var payload=JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));

      var roles=payload.role;
    allowRoles.forEach((element: any) => {

        if (roles==element) {
          isMatch=true;
          return false;
        }
        else
        {
          isMatch = false
          return true;
          }
      });
      return isMatch;
  }
}
