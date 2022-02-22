import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  OverOnNavLi(ele:any)
  {
   // console.log(ele)
    var all=document.getElementsByClassName("mynavbtn");

    for (let index = 0; index < all.length; index++) {
      
      const element = all[index];
      
      if(ele.target==element)
      {
        console.log("done")
        element.classList.add("changenavbtn");

      }
      else
      {
        element.classList.remove("changenavbtn");
      
      }
      //console.log(rout);
     
    }
   
  }

}
