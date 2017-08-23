import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event/event.component';

@Component({
  selector: 'nav-search',
  templateUrl: './nav.search.component.html',
  styleUrls:['../../../../../assets/css/app.main.css']
})
export class NavsearchComponent implements OnInit {
  public searchvalue: string;
  constructor(private _eventsService: EventService) {}

  onSearch(menusearchvalue) {
    this._eventsService.OnMenuSearchEvent(menusearchvalue);
  }
  
  ngOnInit() {
  }

}
