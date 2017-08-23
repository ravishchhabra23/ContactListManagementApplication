import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpProvider} from '../../../common/services/http/http.service';
import {EventService} from '../../../common/services/event/event.component';
import { Cookie } from 'ng2-cookies';
import {ApiConfigService} from '../../../common/services/config/config.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service'

@Component({
  selector: 'user-register',
  templateUrl: './user.register.component.html'
  //styleUrls: ['./app.component.css']
})
export class UserRegisterComponent {
  message:string='';
  strinput: any = {url:'/user/register',usertype:'user',enabled:0};
  //url:string='/user/login';
  constructor(
    private _commonsEventsService: EventService,
    private _config: ApiConfigService,
    private _router: Router,
    private _objectService: CommonsObjectsService
  ) {
      this._commonsEventsService.OnMenuChangeEvent({menu: 'usercontactmenuitems'});
      if(Cookie.get('_u') && Cookie.get('ur'))
      {
        this.message='User already registered';
      }
  }
  Register(event) {
        
        if(event.status == 'success'){
          let details = {
          username : event.result.username,
          //cookie : event.cookie._u,
          usertype : event.result.usertype,
          enabled : event.result.enabled,
          //loggedin : true
        };
        this._objectService.usercontactmenuitems[0].show = false;
        this._objectService.usercontactmenuitems[1].show = false;
        this._objectService.usercontactmenuitems[2].show = true;
        this._objectService.usercontactmenuitems[3].show = true;
        this.message='Contact admin to enable logon.';
        }
      else{
        this._router.navigateByUrl('/user/register');
      }
  }
}
