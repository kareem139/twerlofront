import { Injectable } from '@angular/core';
import urls from '../../../../src/url.json';
@Injectable({
  providedIn: 'root'
})
export class UrlService {
  title = 'json-file-read-angular';
  public urlList:{mainurl:string}[] = urls;
  _mainurl:string=this.urlList[0].mainurl;
  constructor() { }
}
