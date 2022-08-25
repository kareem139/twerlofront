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
    
    return this.http.post(this.mainurl._mainurl+'login/basic',data);
  }

  AddUserReq(data:any)
  {
    
    return this.http.post(this.mainurl._mainurl+'signup/addUser',data);
  }
  getalluser()
  {
    
    return this.http.get(this.mainurl._mainurl+'user/all');
  }
  // check on Role for user
  roleMatch(allowRoles:any):boolean
  {
      var isMatch=false;
      var payload=JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));

      var role=payload.role;
    allowRoles.forEach((element: any) => {

        if (role==element) {
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
