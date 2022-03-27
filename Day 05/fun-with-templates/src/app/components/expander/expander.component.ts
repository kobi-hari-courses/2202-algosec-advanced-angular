import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { BlankDirective } from 'src/app/directives/blank.directive';
import { DemoDirective } from 'src/app/directives/demo.directive';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit, AfterViewInit {
  @ContentChild(DemoDirective)
  demo: DemoDirective | null = null;

  @ViewChild('borderDiv', {read: ViewContainerRef})
  vcr!: ViewContainerRef;

  @ViewChild('myTemplate', {read: TemplateRef})
  theTemplate!: TemplateRef<any>;


  @ViewChildren(BlankDirective)
  blankDirectives!: QueryList<BlankDirective>;

  borderColor = 'orange';


  constructor() { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('the div element is', this.vcr);
    console.log('our child directives are ', this.blankDirectives);
    
    this.vcr.createEmbeddedView(this.theTemplate);
    this.vcr.createEmbeddedView(this.theTemplate);
    this.vcr.createEmbeddedView(this.theTemplate);
    
    // setTimeout(() => this.borderColor = 'pink' , 50);
  }

}
