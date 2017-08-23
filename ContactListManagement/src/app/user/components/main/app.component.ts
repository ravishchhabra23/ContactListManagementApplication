import { Component } from '@angular/core';
import {EventService} from '../../../common/services/event/event.component';
import {CommonsObjectsService} from '../../../common/services/object/object.service';
import {UserService} from '../../../user/services/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html'
})
export class UserAppComponent {
  public loggedInUser:string;
  constructor(private _eventService:EventService, private _objectService:CommonsObjectsService,
  private _userService:UserService){
     this._eventService.OnMenuChangeEvent({menu: 'usermenuitems'});
    this._eventService.menusearch.subscribe((data) => {
      this.onMenuSearch(data);
      
    });
  }
  onMenuSearch(data){
    console.log(data);
  }
  ngOnInit(){
    if(this._userService.getusername()=='undefined' || this._userService.getusername()=='')
      this.loggedInUser =null;
    else
      this.loggedInUser = this._userService.getusername();
  }
}
