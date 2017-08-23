import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpProvider} from '../../../common/services/http/http.service';
import {EventService} from '../../../common/services/event/event.component';
import { Cookie } from 'ng2-cookies';
import {ApiConfigService} from '../../../common/services/config/config.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service'
import {UserAdminService} from '../../services/user/user.service.component'

@Component({
  selector: 'admin-login',
  templateUrl: './app.login.component.html'
})
export class AdminLoginComponent {
  url: string = '/admin/login';
  constructor(
    private _commonsEventsService: EventService,
    private _config: ApiConfigService,
    private _userService: UserAdminService,
    private _router: Router,
    private _objectService: CommonsObjectsService
  ) {
        this._commonsEventsService.OnMenuChangeEvent({menu: 'adminmenuitems'});
  }
  onLoginevent(event) {
    if(event.status == 'success'){
      Cookie.set('_a', event.cookie._a, 1, '/');
      Cookie.set('ar', event.cookie.ar, 1, '/');
      Cookie.set('atype', event.result.usertype, 1, '/');
      let details = {
      username : event.result.username,
      cookie : event.cookie._a,
      usertype : event.result.usertype,
      enabled : event.result.enabled,
      loggedin : true
    };
    this._userService.setUserLogin(details);
    this._objectService.adminmenuitems[0].show = false;
    this._objectService.adminmenuitems[1].show = true;
    this._objectService.adminmenuitems[2].show = true;
    this._router.navigateByUrl('/admin/user/details');
    }
  else{
    this._router.navigateByUrl('/');
  }
    
  }

}
