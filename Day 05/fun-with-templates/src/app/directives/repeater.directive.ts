import { Directive, EmbeddedViewRef, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

interface RepeatContext {
  $implicit: number;
  first: boolean;
  last: boolean;
}

@Directive({
  selector: '[myRepeat]'
})
export class RepeaterDirective implements OnChanges {

  @Input('myRepeat')
  times: number = 1;

  @Input('myRepeatSkip')
  skip: number = 1;

  @Input('myRepeatStartWith')
  startWith: number = 1;

  constructor(
    private template: TemplateRef<RepeatContext>, 
    private vcr: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.invalidate();
  }


  invalidate() {
    // add missing views, if needed
    while (this.vcr.length < this.times) {
      this.vcr.createEmbeddedView<RepeatContext>(this.template, {
        $implicit: 0, 
        first: false, 
        last: false
      });
    }

    // remove extra views if exist
    while (this.vcr.length > this.times) {
      this.vcr.remove(this.vcr.length - 1);
    }

    // correct all contexts
    for (let index = 0; index < this.vcr.length; index++) {
      const vref = this.vcr.get(index)! as EmbeddedViewRef<RepeatContext>;
      const context = vref.context;
      context.$implicit = index * this.skip + this.startWith;
      context.first = (index === 0);
      context.last = (index === this.vcr.length - 1);
    }

  }

}
