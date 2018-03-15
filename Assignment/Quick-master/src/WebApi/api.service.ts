import { Injectable } from "@angular/core";
import {Http,Response} from "@angular/http"
import 'rxjs/add/operator/map';
@Injectable()
export class Apiservice{
    data(){
        return 'Hello World';
    }
    constructor(private _http:Http){}
    getEmployee()
    {
        return this._http.get('http://localhost:52401/api/Employee').map((response:Response)=>response.json());
    }
}