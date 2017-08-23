import {Pipe} from '@angular/core';
import {CommonsObjectsService} from '../../services/object/object.service';
@Pipe({
    name:"Filter"
})
export class FilterPipe{
    constructor(private _commonObj:CommonsObjectsService){}
    transform(datalist:any,filterstring:any){
        let filteredlist:any[]=[];
        datalist.forEach(element=>{
            let jsonString = JSON.stringify(element,this.replacer);
            this._commonObj.usercolumnkeys.forEach(col=>{
                jsonString = jsonString.replace(col,'');
            });
            if(jsonString.toUpperCase().indexOf(filterstring.toUpperCase())>=0){
                filteredlist.push(element);
            }
        });
        return filteredlist;
    }
    replacer(key,value)
    {
        if (key=="userid"){return undefined;}
        else if (key=="_id"){return undefined;}
        else return value;
    }
}