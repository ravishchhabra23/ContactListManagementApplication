import {Component,Pipe,PipeTransform} from '@angular/core'
declare var moment: any;

@Pipe({
    name: 'CustomDatePipe'
})
export class CustomDatePipe implements PipeTransform {
transform(date:any,format:any) {
    return moment(date,"YYYY/MM/DD").format(format);
}
}