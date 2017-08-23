import { Component } from '@angular/core';
import {EventService} from '../../../common/services/event/event.component';
import{Cookie} from 'ng2-cookies';
import { RestApisService} from '../../../common/services/restapi/restapi.service';
import { HttpProvider} from '../../../common/services/http/http.service';
import { CommonsObjectsService} from '../../../common/services/object/object.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['../../../../assets/css/app.main.css']
})
export class AdminUserMenuComponent {
  //update 'block' to 'none' later
  public display:string='none';
  constructor(private _commonObjectService:CommonsObjectsService,
  private _httpService:HttpProvider,
  private _restAPIService:RestApisService,
  private _router:Router,
  private _eventService:EventService){
    this.display='none';
    this._eventService.OnMenuChangeEvent({menu: 'adminmenuitems'})
    if(Cookie.get('_a') && Cookie.get('ar')){
      this.display='block';
  }
  }
}
