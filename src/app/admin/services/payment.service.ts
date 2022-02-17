import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private mainurl:UrlService,private http:HttpClient) { }

  addReq(data:any){
    return this.http.post(this.mainurl._mainurl+'Payments/Payment/PlacePayment',data);
  }
  getallReq(){
   	
    var today = new Date();
    var date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-0'+today.getDate();
    var datelast=today.toISOString();
    
    let param=new HttpParams().set("dayDate",datelast)
    return this.http.get(this.mainurl._mainurl+'Payments/Payment/GetPaymentsByDate',{params:{dayDate:datelast}});
  }
  checkontranIdReq(id:string){
    let param=new HttpParams().set("transId",id)
    return this.http.get(this.mainurl._mainurl+'Payments/Payment/GetPaymentById',{params:param})
  }

  confirmpaymentReq(data:any){
    return this.http.put(this.mainurl._mainurl+'Payments/Payment/ConfirmPayment',data)
  }

  cancelpaymentReq(transIdd:string){
    //let param=new HttpParams().set("transId",transId)
    return this.http.put(this.mainurl._mainurl+'Payments/Payment/CancelPaymentById',{}, {
      params: { transId: transIdd }
   })
  }
}
