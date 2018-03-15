import{Injectable} from "@angular/core";
import { Http, Response, Headers, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Rx";
import { NgForm } from "@angular/forms";
@Injectable()
export class LoginServices{
    private url:string ="http://localhost:54277/api/usersAccounts"
    constructor(private _http:Http){}
    getdata() {
        return this._http.get(this.url).map((response:Response) => response.json());
    }
}


