import {Injectable} from '@angular/core';
import {Http,Request,Response,Headers,RequestMethod} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ApiConfigService} from '../config/config.service';
import{Router} from '@angular/router'

@Injectable()
export class HttpProvider{
    http:Http;
    constructor(http:Http,private _apiConfig:ApiConfigService,private _router:Router){
        this.http = http;
    }
    httprequest(completeurl:string,method:string,data:any,header:Headers){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //for polyfill
        if(header != undefined || header != null){
            Object.keys(header).forEach(function(key) {
                headers.append(key, header[key]);
            });

        if (method === 'GET') { var methods = RequestMethod.Get }
        else if (method === 'POST') { var methods = RequestMethod.Post }
        else if (method === 'PUT') { var methods = RequestMethod.Put }
        else if (method === 'PATCH') { var methods = RequestMethod.Patch }
        else if (method === 'DELETE') { var methods = RequestMethod.Delete }
        else { var methods = RequestMethod.Get };
        return this.http.request(new Request({
            method:methods,
            url:this._apiConfig.apiServerUrl+completeurl,
            body:data,
            headers:header
        })
        ).map(response=>{return response.json()}).catch(this.handleError);
    }
}
public handleError = (error: Response) => {
       return Observable.throw(error.json().error || 'unable to connect to api server')
    }
}