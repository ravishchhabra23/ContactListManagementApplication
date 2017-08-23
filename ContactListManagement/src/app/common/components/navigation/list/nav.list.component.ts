import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
import {CommonsObjectsService} from '../../../services/object/object.service';
import {EventService} from '../../../services/event/event.component';
import {Router} from '@angular/router'

@Component({
  selector: 'nav-list',
  templateUrl: './nav.list.component.html',
  styleUrls: ['../../../../../assets/css/app.main.css']
})
export class NavListComponent implements OnInit {
    public menuitems:any[];
  constructor(private _commonsObjectService:CommonsObjectsService,
    private _eventservice:EventService,private _router:Router,
    private _changeDetectorRef:ChangeDetectorRef){
      if(this._router.url == '/admin'){
         this.menuitems = this._commonsObjectService.adminmenuitems;
      }
      else if(this._router.url == '/user'){
          this.menuitems = this._commonsObjectService.usercontactmenuitems;
      }
    this._eventservice.menuchange.subscribe(data=>{
        this.menuitems = this._commonsObjectService[data.menu];
    })
  }
 ngOnInit(){
     this._changeDetectorRef.detectChanges();
    }
}
