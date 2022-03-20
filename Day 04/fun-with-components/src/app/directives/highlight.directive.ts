import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  private _background: string = 'lime';
  @Input('appHighlight')
  get background(): string { return this._background;}
  set background(value: string) {
    this._background = value;
    this.bg = this._background;
  }


  @HostBinding('style.background')
  bg!: string;


  @HostListener('click')
  removeTheBackground() {
    this.bg = '';
  }


  constructor(private host: ElementRef, private renderer: Renderer2) { 
    // this.host.nativeElement.style.backgroundColor = 'yellow';
    // this.host.nativeElement.addEventListener('click', () => this.removeTheBackground());

    // renderer.setStyle(host.nativeElement, 'background-color', 'pink');

    console.log(`Element Ref`, host.nativeElement);


  }
  ngOnInit(): void {
    this.bg = this.background;
    console.log(`app highlight directive.background = ${this.background}`);
  }

}
