import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[kobi], kobi, .kobi'
})
export class KobiDirective {

  @HostBinding('style.border') 
  border = '4px solid green';

  @HostBinding('style.border-radius')
  radius = '50%';

  constructor() { }

}
