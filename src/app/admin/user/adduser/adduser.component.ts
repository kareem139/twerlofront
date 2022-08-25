import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/service/account.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private service:AccountService,private router:Router) { }

  ngOnInit(): void {
  }

  ngsubmit(data:any){
    this.service.AddUserReq(data.value).subscribe((res)=>{
      this.router.navigateByUrl('/user/list')
    })
  }
}
