import { Component,OnInit} from '@angular/core';
import {HttpProvider} from '../../../common/services/http/http.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service';
import {RestApisService} from '../../../common/services/restapi/restapi.service';
import {UserAdminService} from '../../services/user/user.service.component';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies';

@Component({
  selector: 'admin-logout',
  templateUrl: './app.logout.component.html',
  styleUrls: ['../../../../assets/css/app.main.css']
})
export class AdminLogoutComponent implements OnInit {
  message: string;
  constructor(
    private _httpservice: HttpProvider,
    private _restapis: RestApisService,
    private _objectService: CommonsObjectsService,
    private _router: Router,
    private _userservice: UserAdminService
  ) { }

  ngOnInit() {
    if(!Cookie.get('ar') || !Cookie.get('_a')){
      this._router.navigateByUrl('/');
    }
    
    this._restapis.logOutAdmin.headers = {
      username: Cookie.get('ar')
    };
    
    this._restapis.logOutAdmin.data = {cookies: {_a: Cookie.get('_a')}};
    this._httpservice.httprequest(
      this._restapis.logOutAdmin.url,
      this._restapis.logOutAdmin.method,
      this._restapis.logOutAdmin.data,
      this._restapis.logOutAdmin.headers
    ).subscribe((res) => {
      if(res.status === 'success') {
        Cookie.delete('_a', '/');
        Cookie.delete('ar', '/');
        this._objectService.adminmenuitems[1].show = false;
        this._objectService.adminmenuitems[2].show = false;
        this._objectService.adminmenuitems[0].show = true;
        this._userservice.reset();
        this._router.navigateByUrl('/admin/login');
      } else {
        this.message = 'logout failed due to some reason!';
        this._router.navigateByUrl('error/'+res.status.code);
      }
    });
  }
}
