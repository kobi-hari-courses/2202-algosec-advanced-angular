import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appExpanderToggle]'
})
export class ExpanderToggleDirective {
  get button(): HTMLButtonElement | null {
    const btn = this.elem?.nativeElement;
    if (btn instanceof HTMLButtonElement) return btn;

    return null;
  }

  constructor(private elem: ElementRef) { }

}
