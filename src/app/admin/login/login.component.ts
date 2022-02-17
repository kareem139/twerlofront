import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/service/account.service';
import urls from '../../../../src/date.json';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'json-file-read-angular';
  public data:{mainurl:string}[] = urls;
  alldata:any=this.data[0]
  constructor(private router:Router,private service:AccountService) { }

  ngOnInit(): void {
    localStorage.setItem("data",this.alldata)
  }

  login(){
    this.router.navigateByUrl('company/payment/add')
    // var da=JSON.stringify(localStorage.getItem("data"))
    // console.log(da);
    //   this.service.LoginReq(data.value).subscribe((res:any)=>{
    //     if (res.succeeded) {
    //       data=res.data;
    //       localStorage.setItem('token', data.token);
    //       // To get UserId
    //       // let payload = JSON.parse(window.atob(data.token.split('.')[1]));
    //       // let userid = payload.UserID;
    //       // console.log(userid);
          
    //       this.router.navigateByUrl('company/payment/add')
    //     }
    //       console.log(res);
          
    //   },err=>{
    //       console.log(err);
          
    //   })
  }

}
