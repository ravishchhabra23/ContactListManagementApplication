import { Component,Output,Input,EventEmitter } from '@angular/core';
import {CommonsObjectsService} from '../../services/object/object.service';
import {HttpProvider} from '../../services/http/http.service';
import {RestApisService} from '../../services/restapi/restapi.service';


@Component({
  selector: 'common-login',
  templateUrl: './login.component.html',
  styleUrls:  ['../../../../assets/css/app.main.css']
})
export class CommonLoginComponent {
    @Input() url:string;
    @Output() loginevent:EventEmitter<any>;
    public user:any = {username:null,password:null};
  constructor(private _commonobjectService:CommonsObjectsService,
private _httpService:HttpProvider,
private _restApiService:RestApisService){
    this.loginevent = new EventEmitter();
  }

  Login(inputdata:any){
      this._httpService.httprequest(this.url,'POST',inputdata,inputdata).subscribe(res=>{
          if(res.status == 'success'){
              this.loginevent.emit(res);
          }
        else{
            this.loginevent.emit(res);
        }
        });
    }
}
