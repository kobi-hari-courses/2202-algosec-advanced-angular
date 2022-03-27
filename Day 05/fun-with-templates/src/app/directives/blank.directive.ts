import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appBlank]'
})
export class BlankDirective {

  @Input('appBlank')
  id: number = -1;

  constructor() { }

}
