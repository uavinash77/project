import { Component,OnInit } from '@angular/core';
import { loginService } from '../Services/login.service';
import { NgFor } from '@angular/common';
import { LoginCredentials } from '../Services/credentials';
@Component({
  selector: 'my-sectionone',
  styles: ['legend{color:white;}'],
  templateUrl: './html/sectionone.html',
})
export class SectiononeComponent implements OnInit 
{
  temp=[];
  Logincredentials = new LoginCredentials();
  constructor(private _appService: loginService) { }  
  loginUser(login)
  {
    for(var i=0;i<this.temp.length;i++)
    {  
      if(this.temp[i].id==this.Logincredentials.id && this.temp[i].password==this.Logincredentials.password)
      {
        console.log(this.Logincredentials.name);
      }
    }
  }
  ngOnInit()
  {   
    this._appService.getuser().subscribe(res=>this.temp=res,error =>console.log("error occured"),()=>console.log("success"));
  }   
}
