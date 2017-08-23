import {Injectable,EventEmitter,Output} from '@angular/core';

@Injectable()
export class EventService {
    @Output() menuchange:EventEmitter<any>;
    @Output() menusearch:EventEmitter<any>;
    constructor(){
        this.menuchange = new EventEmitter();
        this.menusearch = new EventEmitter();
    }
    OnMenuChangeEvent(menulist){
        this.menuchange.emit(menulist);
    }
    OnMenuSearchEvent(menusearchitem){
        this.menusearch.emit({value:menusearchitem});
    }
}
