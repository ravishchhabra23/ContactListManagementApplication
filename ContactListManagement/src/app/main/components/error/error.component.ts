import { Component,Output,Input,EventEmitter } from '@angular/core';
import {CommonsObjectsService} from '../../../common/services/object/object.service';
import {HttpProvider} from '../../../common/services/http/http.service';
import {RestApisService} from '../../../common/services/restapi/restapi.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router'


@Component({
  selector: 'common-error',
  templateUrl: './error.component.html',
  styleUrls:  ['../../../../assets/css/app.main.css']
})
export class CommonErrorComponent {
    @Input() url:string;
    @Output() loginevent:EventEmitter<any>;

    public message:string;
    public errorcode:any;

  constructor(private _commonobjectService:CommonsObjectsService,
    private _restApiService:RestApisService,
    private _route: ActivatedRoute,
    private _router: Router){
  }

 ngOnInit() {
    this.errorcode = this._route.snapshot.params['code'];
    console.log('error code:'+this.errorcode);
    if(this.errorcode==401){
      this.message = 'Authentication error. Please use correct credentials or contact Admin to enable Logon.'
    }
  }
}
