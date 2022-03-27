import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class IfDirective {

  private _isPresentingTemplate: boolean = false;

  private _condition: boolean = false;

  @Input('myIf')
  get condition(): boolean {return this._condition};
  set condition(value: boolean) {
    this._condition = value;
    this.invalidate();
  }

  constructor(
    private template: TemplateRef<any>, 
    private vcr: ViewContainerRef
  ) { }

  invalidate() {
    if (this._condition && !this._isPresentingTemplate) {
      this.vcr.createEmbeddedView(this.template);
    } else if (!this._condition && this._isPresentingTemplate) {
      this.vcr.clear();
    }

    this._isPresentingTemplate = this._condition;
  }

}
