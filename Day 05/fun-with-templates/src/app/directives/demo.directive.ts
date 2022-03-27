import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private elem: ElementRef) {
    console.log('Demo Directive Created');
    console.log(elem);
  }

}
