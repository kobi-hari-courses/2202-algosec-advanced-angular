import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'h1, h2, h3, h4'
})
export class HeaderIncreaserDirective {

  @HostBinding("style.font-size")
  fontSize = '40px';

  constructor() { }

}
