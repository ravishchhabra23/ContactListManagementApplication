import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpProvider} from '../../../common/services/http/http.service';
import {EventService} from '../../../common/services/event/event.component';
import { Cookie } from 'ng2-cookies';
import {ApiConfigService} from '../../../common/services/config/config.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service'

@Component({
  selector: 'admin-usercreate',
  templateUrl: './app.user.create.component.html'
})
export class AdminUserCreateComponent {
  message:string='';
  strinput: any = {url:'/admin/user/create',usertype:'admin',enabled:1,cookie:Cookie.get('_a')};
  //url:string='/user/login';
  constructor(
    private _commonsEventsService: EventService,
    private _config: ApiConfigService,
    private _router: Router,
    private _objectService: CommonsObjectsService
  ) {
      this._commonsEventsService.OnMenuChangeEvent({menu: 'adminmenuitems'});
  }
  Register(event) {
        if(event.status == 'success'){
          let details = {
          username : event.result.username,
          usertype : event.result.usertype,
          enabled : event.result.enabled,
        };

        this._objectService.adminmenuitems[1].show = true;
        this._objectService.adminmenuitems[2].show = true;
        this._router.navigateByUrl('/admin/user/details');
        }
      else{
      }
  }
}
