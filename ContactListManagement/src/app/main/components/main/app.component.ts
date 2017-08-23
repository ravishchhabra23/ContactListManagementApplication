import { Component } from '@angular/core';
import {Cookie} from 'ng2-cookies';
import { CommonsObjectsService} from '../../../common/services/object/object.service';
import {UserAdminService} from '../../../admin/services/user/user.service.component';
import {UserService} from '../../../user/services/user/user.service';
import { RestApisService} from '../../../common/services/restapi/restapi.service';
import { HttpProvider} from '../../../common/services/http/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact List Management';
  constructor(private _commonObjectService:CommonsObjectsService,
  private _httpService:HttpProvider,
  private _restAPIService:RestApisService,
  private _userService:UserService,
  private _userAdminService:UserAdminService){
    this.getLoggedinUserDetails();
 }

 getLoggedinUserDetails(){
      if(Cookie.get('_u') && Cookie.get('ur')){
        this._restAPIService.loginUser.data ={
          'cookies': {'_u': Cookie.get('_u')}
        };
          this._httpService.httprequest(this._restAPIService.loginUser.url,
          this._restAPIService.loginUser.method,this._restAPIService.loginUser.data,
        this._restAPIService.loginUser.headers).subscribe((res)=>{
          Cookie.set('_uid',res.result.userid);
          if(res.status == 'success'){
            let details = {
            username : res.result.username,
            cookie : res.cookie._u,
            usertype : res.result.usertype,
            enabled : res.result.enabled,
            firstname :res.result.firstname,
            lastname : res.result.lastname,
            userid : res.result.userid,
            loggedin : true
          };
            this._userService.setUserLogin(details);
            Cookie.set('ur', res.result.username, 1, '/');
            this._commonObjectService.usercontactmenuitems[0].show = false;
            this._commonObjectService.usercontactmenuitems[1].show = false;
            this._commonObjectService.usercontactmenuitems[2].show = true;
            this._commonObjectService.usercontactmenuitems[3].show = true;
          }
          });
    }
    if(Cookie.get('_a') && Cookie.get('ar'))
      {
        console.log('Login admin Cookie exists');
          this._restAPIService.loginAdmin.data ={
            'cookies': {'_a': Cookie.get('_a')}
          } ;
        this._httpService.httprequest(this._restAPIService.loginAdmin.url,
        this._restAPIService.loginAdmin.method,this._restAPIService.loginAdmin.data,
        this._restAPIService.loginAdmin.headers).subscribe((res)=>{
          console.log('service request response'+res);
          if(res.status == 'success'){
            let details = {
            username : res.result.username,
            cookie : res.cookie._a,
            usertype : res.result.usertype,
            enabled : res.result.enabled,
            firstname :res.result.firstname,
            lastname : res.result.lastname,
            loggedin : true
          };
          this._userAdminService.setUserLogin(details);
            Cookie.set('ar', res.result.username, 1, '/');
            this._commonObjectService.adminmenuitems[0].show = false;
            this._commonObjectService.adminmenuitems[1].show = true;
            this._commonObjectService.adminmenuitems[2].show = true;
          }
        });
      }
  }
}
