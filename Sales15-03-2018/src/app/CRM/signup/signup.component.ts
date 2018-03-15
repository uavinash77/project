import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import {Customer} from '../../Services/customer.model';
import {CompanyDetails} from '../../Services/companyDetails.model';
import {Employee} from '../../Services/employee.model';
import {userAccount} from '../../Services/userAccount.model';
import {SalesserviceService} from '../../Services/salesservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[SalesserviceService]
})

export class SignupComponent implements OnInit 
{
  constructor(private salesCrmServices:SalesserviceService ) { }

  Customer= new Customer();
  CompanyDetails:CompanyDetails[];
  userAccount = new userAccount();
  employee = new Employee();

  ngOnInit() 
  {
    this.userAccount.isAdmin=false;
    this.salesCrmServices.getCompanyDetails().subscribe(data=> this.CompanyDetails=data);
  }

  //Email validation
  emailError = null;
  emailbool: boolean= false;
  pattern:string="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  changeEmail(email:string)
  {
    this.emailbool = false;
    this.emailError="";
    if(email!="")
    {
      if(email.match(this.pattern))
      {
        this.emailError = null;
      }
      else
      {    
        this.emailError= "Invalid Email Address";
        this.emailbool = true;
      }
    }
  }
  onRegister(form: NgForm) 
  {    
    if(this.userAccount.isAdmin)
    {
      this.salesCrmServices.postEmployee(form.value).subscribe(data=>{this.employee=data;this.salesCrmServices.postUserAccount(form.value).subscribe(data=>{this.userAccount=data},error =>console.log("Please Provide A Valid Detail"),()=>console.log("Successfully Registered As Employee"))})
    }
    else
    {
      this.salesCrmServices.postCustomer(form.value).subscribe(data=>{this.Customer = data;this.salesCrmServices.postUserAccount(form.value).subscribe(data=>{this.userAccount=data},error =>console.log("Please Provide A Valid Detail"),()=>console.log("Successfully Registered As Employee"))})
    }
  }
}
