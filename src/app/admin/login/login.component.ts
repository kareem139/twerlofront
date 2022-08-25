import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AccountService } from 'src/app/shared/service/account.service';
import urls from '../../../../src/date.json';
import Swal from 'sweetalert2';
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

  login(form:any){
    console.log(form)
    //this.router.navigateByUrl('login/payment/add')
    var da=JSON.stringify(localStorage.getItem("data"))
    console.log(da);
      this.service.LoginReq(form.value).subscribe((res:any)=>{

        var  data=res.data;
          localStorage.setItem('token', data.tokens.accessToken);
          console.log(res.data)
          let payload = JSON.parse(window.atob(data.tokens.accessToken.split('.')[1]));
          let userid = payload._id;
          console.log(userid);
          

          if (res.statusCode==200)
          {
            Swal.fire({
              icon: 'success',
              title: 'Login Success',
              text: 'Welcome Back'
            })
            this.router.navigateByUrl('/incident/list')
          }

          
      },err=>{
        Swal.fire({
          icon: 'error',
          title: 'Auth Faild',
          text: 'have error in auth'
        })
          
      })
  }

}
