import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UrlService } from 'src/app/shared/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  filternav=new FormGroup({
    customerId: new FormControl(''),
    supplierId: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
  });;
  datanav:any;
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

  getpaymentbysearch(filter:FormGroup,data:FormGroup){
    this.filternav=filter;
    this.datanav=data
    return this.http.get(this.mainurl._paymenturl+'Payments/Payment/GetPaymentsWithSearch',{params:{
      PageNumber:filter.controls["PageNumber"].value,PageSize:filter.controls["PageSize"].value,RouteValue:filter.controls["RouteValue"].value,supplierId:data.controls["supplierId"].value,
      customerId:data.controls["customerId"].value,from:data.controls["from"].value,to:data.controls["to"].value
    }})
  }

  getallcompanyList(){
    return this.http.get(this.mainurl._paymenturl+'Companies/Companies/GetCompanyCodes');
  }

  getSuppliers()
  {
    return this.http.get(this.mainurl._paymenturl+'Account/GetUsers');
  }

  getsupplierBalancesReq(data:FormGroup)
  {
    return this.http.get(this.mainurl._paymenturl+'Payments/Payment/GetSupplierBalances',{params:{
      from:data.controls["from"].value,to:data.controls["to"].value,
      supplierId:data.controls["supplierId"].value,
    }})
  }

  getCustomerBalancesBySupplierReq(data:FormGroup)
  {
    return this.http.get(this.mainurl._paymenturl+'Payments/Payment/GetCustomerBalancesBySupplier',{params:{
      from:data.controls["from"].value,to:data.controls["to"].value,
      supplierId:data.controls["supplierId"].value,
    }})
  }
}
