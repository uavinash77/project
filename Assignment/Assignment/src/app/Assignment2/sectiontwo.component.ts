import { Component } from '@angular/core';
import{LoginCredentials} from '../Services/credentials';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { loginService } from '../Services/login.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'my-sectiontwo',
  styles:['legend{color:white;}'],
  templateUrl: './html/sectiontwo.html',
})
export class SectiontwoComponent  
{ 
    temp =[];
    user:any;
    credentials = new LoginCredentials();
    constructor(private _appService: loginService,private _http:Http) { } 
    get diagnostic1() { return JSON.stringify(this.credentials); }
    registerUser(form: NgForm) 
    {
      console.log(form.value);
      return this._http.post("http://localhost:51561/api/CodeFirstClasses", form.value)
      .subscribe(resProductData=>this.user = resProductData,error =>console.log("error occured"),()=>console.log("success"));  
    }
}
