import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {userAccount} from '../../Services/userAccount.model';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import {SalesserviceService} from '../../Services/salesservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[SalesserviceService]
})
export class LoginComponent implements OnInit{

  model=new userAccount();
  session_data:any;
  public passData:any;
  count:number=0;
  user:userAccount[];
  flag:number;
  constructor(private _service:SalesserviceService, private _http:Http) { }
  CheckUser(form: NgForm) {
    this.flag=0;
      console.log(form.value.userName);
      for(var i=0;i<this.user.length;i++){
        console.log(form.value.isAdmin);
          if(this.user[i].userName==form.value.userName && this.user[i].password==form.value.password)
          {
            console.log(this.user[i].isAdmin);
            // let check = this.user[i].isAdmin;
            // console.log(""+check);
            // if(check === "true")
            //   {
            //     check ="admin";
            //   }
            //   else{
            //     check="user";
            //   }
            // console.log(check);
            this.flag=1;
            this.passData=this.user[i].userName;
            console.log("pass data: "+this.passData);
            this.session_data=sessionStorage.setItem('sessionData', this.passData);
            this.count+=1;
            console.log("Session data: "+sessionStorage.getItem('sessionData'));
            alert("login successful"); 
            break;
          }
        }
        console.log(this.user);
        console.log("flag: "+this.flag);
        if(this.flag==0)
          {
            alert("Wrong credentials..! Please try again...!");
          }
  }
    ngOnInit()
    {
        this._service.getdata()
       .subscribe(resempdata=>this.user=resempdata); 
    }
  }