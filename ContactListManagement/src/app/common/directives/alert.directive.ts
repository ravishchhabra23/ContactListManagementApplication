import { Directive,Output,EventEmitter,HostListener } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[confirm]'
})
export class AlertDirective {
    @Output('confirm') click: any = new EventEmitter();
    @HostListener('click', ['$event']) clicked(e) {
    $.confirm({
      alignMiddle:true,
      type: 'red',
      container: '#divUserDetails',
        draggable: true,
    typeAnimated: true,
      buttons: {
        confirm: () => this.click.emit(),
        cancel: () => {}
      },
      
    });
  }

}
