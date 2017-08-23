import { Component } from '@angular/core';
import { CommonsObjectsService} from '../../../common/services/object/object.service';
import { HttpProvider} from '../../../common/services/http/http.service';
import { RestApisService} from '../../../common/services/restapi/restapi.service';
import { EventService} from '../../../common/services/event/event.component';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html',
  styleUrls: ['../../../../assets/css/app.main.css']
})
export class HomeComponent {
  public modules:any[];
  constructor(private _commonObjectService:CommonsObjectsService,
  private _httpService:HttpProvider,
  private _restAPIService:RestApisService,
  private _router:Router){
    this.modules = this._commonObjectService.modules;
  }
}
