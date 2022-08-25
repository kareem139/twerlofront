import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/service/url.service';
import { AddIncidentModel } from 'src/app/types/incident';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private mainurl:UrlService,private http:HttpClient) { }

  add(data:AddIncidentModel){
    return this.http.post(this.mainurl._mainurl+'writer/incident',data);
  }
  getalluser(){
    return this.http.get(this.mainurl._mainurl+'user/all');
  }

  getallincident(pageNumber:number,pageItemCount:number,role:any){
    if(role=='ADMIN')
    {

      return this.http.get(this.mainurl._mainurl+`incidents?pageNumber=${pageNumber}&pageItemCount=${pageItemCount}`)
    }else{return this.http.get(this.mainurl._mainurl+`incidents/editor?pageNumber=${pageNumber}&pageItemCount=${pageItemCount}`)}
  }

  resolveReq(id:string|null){
    return this.http.put(this.mainurl._mainurl+`editor/incident/done?id=${id}`,null)
  }
  MoreDetailReq(id:string|null){
    return this.http.get(this.mainurl._mainurl+`incident?id=${id}`)
  }

  getAll(params:any): Observable<any> {
    return this.http.get(this.mainurl._mainurl+'incidents', { params });
  }
}
