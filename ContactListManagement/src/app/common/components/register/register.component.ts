import { Component,Output,Input,EventEmitter,OnInit } from '@angular/core';
import {CommonsObjectsService} from '../../services/object/object.service';
import {HttpProvider} from '../../services/http/http.service';
import {RestApisService} from '../../services/restapi/restapi.service';


@Component({
  selector: 'common-register',
  templateUrl: './register.component.html',
  styleUrls:  ['../../../../assets/css/app.main.css']
})
export class CommonRegisterComponent implements OnInit {
    @Input() strinput:any;
    @Output() registerevent:EventEmitter<any>;

  
    public usertypes:any[] = [
        {value:1,name:'user'},
        {value:2,name:'admin'}];
    public selectedusertype:any;

    public user:any = {username:null,password:null,firstname:null,lastname:null,
        usertype:null,enabled:null,created:null,cookies:null};
    constructor(private _commonobjectService:CommonsObjectsService,
    private _httpService:HttpProvider,
    private _restApiService:RestApisService){
    this.registerevent = new EventEmitter();   
  }
  ngOnInit(){     
      this.user.usertype = this.strinput.usertype;
      this.user.enabled=this.strinput.enabled;
      this.user.created = Date.now();
      this.usertypes[1].selected = true;
      this.selectedusertype = this.usertypes[1];
  }
    onChange(listvalue){
        this.selectedusertype = listvalue;
    }

  Register(inputdata:any){
      let header:any = {username:inputdata.username};
      if(this.user.usertype==='admin'){
          this.user.usertype = this.selectedusertype.name;
          this.user.cookies = {_a:this.strinput.cookie};
          inputdata.usertype=this.user.usertype;
          inputdata.cookies= this.user.cookies;
        };
      
      this._httpService.httprequest(this.strinput.url,'POST',inputdata,header).subscribe(res=>{
          if(res.status == 'success'){
              this.registerevent.emit(res);
          }
        else{
            this.registerevent.emit(res);
        }
        });
    }
}
