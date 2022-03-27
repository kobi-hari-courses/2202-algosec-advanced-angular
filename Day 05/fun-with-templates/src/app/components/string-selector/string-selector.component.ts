import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ItemTemplateDirective } from './item-template.directive';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent implements OnInit {

  @ContentChild(ItemTemplateDirective)
  optionTemplate: ItemTemplateDirective | null = null;

  @Input()
  options: string[] = [];

  @Input()
  selectedOption: string = '';

  @Output()
  optionSelected = new EventEmitter<string>();

  constructor() { }

  onOptionClicked(option: string) {
    this.optionSelected.emit(option);
  }

  ngOnInit(): void {
  }

}
