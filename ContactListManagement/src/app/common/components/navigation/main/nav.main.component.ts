import { Component } from '@angular/core';
import {CommonsObjectsService} from '../../../services/object/object.service';

@Component({
  selector: 'nav-main',
  templateUrl: './nav.main.component.html',
  styleUrls:  ['../../../../../assets/css/app.main.css']
})
export class NavigationMainComponent {
  public brand:string = "Contact List Management";
  constructor(private _commonobjectService:CommonsObjectsService){
  }
}
