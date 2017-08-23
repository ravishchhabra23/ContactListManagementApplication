import { Component,AfterContentChecked } from '@angular/core';
import {Cookie} from 'ng2-cookies';
import {CommonsObjectsService} from '../../../common/services/object/object.service';
import {EventService} from '../../../common/services/event/event.component';
import {HttpProvider} from '../../../common/services/http/http.service';
import {RestApisService} from '../../../common/services/restapi/restapi.service';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'user-contact',
  templateUrl: './user.contact.create.component.html',
  styleUrls:  ['../../../../assets/css/app.main.css']
})
export class UserContactCreateComponent implements AfterContentChecked { 
    public name:string;
    public username:string;
    public usercontact:any = {email:null,mobile:null,workphone:null,
        homephone:null,permanentaddress:null,temporaryaddress:null,cookies:null};

    constructor(private _commonobjectService:CommonsObjectsService,
    private _httpService:HttpProvider,private _userService:UserService,
    private _restApiService:RestApisService,private _eventService:EventService,
    private _router:Router){  
        this._eventService.OnMenuChangeEvent({menu: 'usercontactmenuitems'});
  }
  ngOnInit(){
  }
    ngAfterContentChecked(){
        this.name = this._userService.getfirstname() + ' ' + this._userService.getlastname();
        this.username = this._userService.getusername();
  }
  SaveUserContact(inputdata){
      this._restApiService.createUserContact.headers={username:this.username};
      this._restApiService.createUserContact.data={
        email:inputdata.email,
        mobile:inputdata.mobile,
        workphone:inputdata.workphone,
        homephone:inputdata.homephone,
        permanentaddress:inputdata.permanentaddress,
        temporaryaddress:inputdata.temporaryaddress,
        cookies:{_u:Cookie.get('_u')}
      }
    
      this._httpService.httprequest(this._restApiService.createUserContact.url,
        this._restApiService.createUserContact.method,this._restApiService.createUserContact.data
        ,this._restApiService.createUserContact.headers).subscribe(createres=>{
          if(createres.status == 'success'){
              this._router.navigateByUrl(this._restApiService.getUserContacts.url);
          }
        else{
            this._router.navigateByUrl(this._restApiService.getUserContacts.url)
            let code = createres.code;
            this._router.navigateByUrl('error/'+code);
        }
        });
    }
}



