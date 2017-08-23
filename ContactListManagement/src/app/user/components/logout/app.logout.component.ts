import { Component } from '@angular/core';
import {HttpProvider} from '../../../common/services/http/http.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service';
import {RestApisService} from '../../../common/services/restapi/restapi.service';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies';

@Component({
  selector: 'user-logout',
  templateUrl: './app.logout.component.html'
})
export class UserLogoutComponent {
  message: string;
  constructor(
    private _httpservice: HttpProvider,
    private _restapis: RestApisService,
    private _objectService: CommonsObjectsService,
    private _router: Router,
    private _userservice: UserService
  ) { }

  ngOnInit() {
    if(!Cookie.get('ur') || !Cookie.get('_u')){
      this._router.navigateByUrl('/');
    }
    
    this._restapis.logOutUser.headers = {
      username: Cookie.get('ur')
    };
    
    this._restapis.logOutUser.data = {cookies: {_u: Cookie.get('_u')}};
    this._httpservice.httprequest(
      this._restapis.logOutUser.url,
      this._restapis.logOutUser.method,
      this._restapis.logOutUser.data,
      this._restapis.logOutUser.headers
    ).subscribe((res) => {
      if(res.status === 'success') {
        Cookie.delete('_u', '/');
        Cookie.delete('ur', '/');
        Cookie.delete('_uid', '/');
        this._objectService.usercontactmenuitems[1].show = true;
        this._objectService.usercontactmenuitems[0].show = false;
        this._objectService.usercontactmenuitems[2].show = false;
        this._objectService.usercontactmenuitems[3].show = false;
        this._userservice.reset();
        this._router.navigateByUrl('/user/login');
      } else {
        this.message = 'logout failed due to some reason!';
        this._router.navigateByUrl('/user/login');
      }
    });
  }
}
