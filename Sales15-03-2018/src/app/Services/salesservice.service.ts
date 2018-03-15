import { Injectable } from '@angular/core';
import {Customer} from './customer.model';
import {Employee} from './employee.model';
import {CompanyDetails} from './companyDetails.model';
import {userAccount} from './userAccount.model'
import {Http,Response, RequestOptions, RequestMethod, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SalesserviceService {
  constructor(private http:Http)  {} 
  //Post Customer Details
  public postCustomer(cust: Customer)
  {
    var body = JSON.stringify(cust);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOption = new RequestOptions({method:RequestMethod.Post, headers: headerOptions})
    return this.http.post("http://localhost:65188/api/customers",body, requestOption).map(x=>x.json());
   }
   //Post Employee Details
   public postEmployee(emp: Employee)
   {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOption = new RequestOptions({method:RequestMethod.Post, headers: headerOptions})
    return this.http.post("http://localhost:65188/api/employees",body, requestOption).map(x=>x.json());
   }
   //Post User Account
   public postUserAccount(emp: Employee)
   {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOption = new RequestOptions({method:RequestMethod.Post, headers: headerOptions})
    return this.http.post("http://localhost:65188/api/usersAccounts",body, requestOption).map(x=>x.json());

   }
   //Get Company Details
   public getCompanyDetails() : Observable<CompanyDetails[]>
   {
      return this.http.get("http://localhost:65188/api/contactCompanies").map((response:Response)=><CompanyDetails[]>response.json());
    }
  //Get UserAccount data
  getdata() 
  {
    return this.http.get("http://localhost:65188/api/usersAccounts").map((response:Response) => response.json());
  }

}
