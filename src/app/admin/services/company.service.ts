import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private mainulr:UrlService,private http:HttpClient) { }

  GetAllCodeReq()
  {
    return this.http.get(this.mainulr._mainurl+'Companies/Companies/GetCompanyCodes');
  }
}
