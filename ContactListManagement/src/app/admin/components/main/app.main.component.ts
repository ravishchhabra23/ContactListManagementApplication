import { Component } from '@angular/core';
import {CommonsObjectsService} from '../../../common/services/object/object.service';
import {EventService} from '../../../common/services/event/event.component';
import {UserAdminService} from '../../services/user/user.service.component';

@Component({
  selector: 'admin-main',
  templateUrl: './app.main.component.html'
})
export class AdminAppComponent {
  public loggedInUser:string;
  constructor(private _eventService:EventService,private _commonObjService:CommonsObjectsService,
  private _userService:UserAdminService){
     this._eventService.OnMenuChangeEvent({menu: 'adminmenuitems'});
    this._eventService.menusearch.subscribe((data) => {
      this.onMenuSearch(data);
    });
  }
  onMenuSearch(data){
    console.log(data);
  }
  ngOnInit(){
    console.log('user logged in:'+ this._userService.getusername() )
    if(this._userService.getusername()=='undefined' || this._userService.getusername()=='')
      this.loggedInUser =null;
    else
      this.loggedInUser = this._userService.getusername();
  }
}
