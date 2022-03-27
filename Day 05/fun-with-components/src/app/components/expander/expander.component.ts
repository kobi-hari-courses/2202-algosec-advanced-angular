import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ExpanderToggleDirective } from './expander-toggle.directive';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit, AfterContentInit {
  @ContentChild(ExpanderToggleDirective)
  theButtonDirective:ExpanderToggleDirective | null = null

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
    console.log('our child is', this.theButtonDirective?.button);
  }

  ngAfterContentInit(): void {
    if (this.theButtonDirective?.button) {
      this.theButtonDirective.button.addEventListener('click', () => {
        this.toggle();
      })
    }
  }
}
