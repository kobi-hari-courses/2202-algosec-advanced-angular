import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[myRepeat]'
})
export class RepeaterDirective {

  @Input('myRepeat')
  times: number = 1;

  @Input('myRepeatSkip')
  skip: number = 1;

  @Input('myRepeatStartWith')
  startWith: number = 1;

  constructor() { }

}
