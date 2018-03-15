import { Component,OnInit } from '@angular/core';
import { Apiservice } from './api.service';
@Component({
  selector: 'my-service-app',
  templateUrl:"./api.component.html",
})
export class apiComponent implements OnInit {
    employees:any;
    constructor(private _appService: Apiservice) { }  
    ngOnInit() { 
      this._appService.getEmployee()
    .subscribe(res=>this.employees=res);
        console.log(this.employees);
    }   
  }