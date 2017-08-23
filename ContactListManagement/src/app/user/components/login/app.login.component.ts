import { Component } from '@angular/core';
import {Router} from '@angular/router';

import {HttpProvider} from '../../../common/services/http/http.service';
import {EventService} from '../../../common/services/event/event.component';
import { Cookie } from 'ng2-cookies';
import {ApiConfigService} from '../../../common/services/config/config.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service'
import {UserService} from '../../services/user/user.service'

@Component({
  selector: 'user-login',
  templateUrl: './app.login.component.html'
  //styleUrls: ['./app.component.css']
})
export class UserLoginComponent {
   url: string = '/user/login';
  constructor(
    private _commonsEventsService: EventService,
    private _config: ApiConfigService,
    private _userService: UserService,
    private _router: Router,
    private _objectService: CommonsObjectsService
  ) {
        this._commonsEventsService.OnMenuChangeEvent({menu: 'usercontactmenuitems'});
  }
  onLoginevent(event) {
    if(event.status == 'success'){
      Cookie.set('_u', event.cookie._u, 1, '/');
      Cookie.set('ur', event.cookie.ur, 1, '/');
      Cookie.set('utype', event.result.usertype, 1, '/');
      let details = {
      username : event.result.username,
      cookie : event.cookie._u,
      usertype : event.result.usertype,
      enabled : event.result.enabled,
      firstname : event.result.firstname,
      lastname : event.result.lastname,
      userid : event.result.userid,
      loggedin : true
    };
    this._userService.setUserLogin(details);
    
    this._objectService.usercontactmenuitems[0].show = false;
    this._objectService.usercontactmenuitems[1].show = false;
    this._objectService.usercontactmenuitems[2].show = true;
    this._objectService.usercontactmenuitems[3].show = true;
    this._router.navigateByUrl('/user/contact/details');

    }
  else{
    let code = event.code;
    this._router.navigateByUrl('error/'+code);
  }
    
  }
}
