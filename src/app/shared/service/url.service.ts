import { Injectable } from '@angular/core';
import urls from '../../../../src/url.json';
@Injectable({
  providedIn: 'root'
})
export class UrlService {
  title = 'json-file-read-angular';
  public urlList:{mainurl:string,paymentUrl:string}[] = urls;
  _mainurl:string=this.urlList[0].mainurl;
  _paymenturl:string=this.urlList[0].paymentUrl;
  constructor() { }
}
