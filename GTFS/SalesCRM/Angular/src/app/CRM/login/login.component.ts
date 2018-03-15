import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { userAccounts } from '../../Model/login.model';
import { LoginServices } from '../../services/login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  model=new userAccounts();
  session_data:any;
  public passData:any;
  count:number=0;
  user:userAccounts[];
  flag:number=0;
  constructor(private _service:LoginServices,private _http:Http) { }
  CheckUser(form: NgForm) {
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
        console.log(this.flag);
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

 




