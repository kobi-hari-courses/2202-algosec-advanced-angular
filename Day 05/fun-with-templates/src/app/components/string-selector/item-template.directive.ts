import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[optionTemplate]'
})
export class ItemTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
