import { Component,OnInit } from '@angular/core';
import { loginService } from '../Services/login.service';
import { NgFor } from '@angular/common';
import { LoginCredentials } from '../Services/credentials';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'my-sectionone',
  styles: ['legend{color:white;}'],
  templateUrl: './html/sectionone.html',
})
export class SectiononeComponent implements OnInit 
{
  temp=[];
  Logincredentials = new LoginCredentials();
  constructor(private _appService: loginService, private _router:Router) { }  
  loginUser(login:NgForm)
  {
    for(var i=0;i<this.temp.length;i++)
    {  
      if(this.temp[i].id==this.Logincredentials.id && this.temp[i].password==this.Logincredentials.password)
      {
        this._router.navigate(['/TableComponent']); 
        console.log(this.temp[i].name);
      }
    }
  }

  ngOnInit()
  {   
    this._appService.getuser().subscribe(res=>this.temp=res,error =>console.log("error occured"),()=>console.log("success"));
  }   
}
