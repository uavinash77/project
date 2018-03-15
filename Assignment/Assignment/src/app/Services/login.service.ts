import { Injectable } from "@angular/core";
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
@Injectable() 

export class loginService { 
    constructor(private _http:Http){}
    getuser()
    {
        return this._http.get('http://localhost:51561/api/CodeFirstClasses').map((response:Response)=>response.json());
    }
}