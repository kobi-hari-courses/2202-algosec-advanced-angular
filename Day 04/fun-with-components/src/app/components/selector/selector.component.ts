import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit, OnChanges, OnDestroy {
  @Input('options')
  possibleOptions: string[] = [];

  private _selectedValue$ = new BehaviorSubject('');
  @Input()
  get selectedValue(): string {return this._selectedValue$.value}
  set selectedValue(value: string) {
    console.log(`changing the selectedValue from ${this._selectedValue$.value} to ${value}`);
    this._selectedValue$.next(value);
  }

  @Output()
  onSelection = new EventEmitter<string>();

  constructor() { 
    console.log('Selector created');
  }

  ngOnInit(): void {
    console.log('Selected OnInit completed');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['selectedValue']) {
    //   const change = changes['selectedValue'];
    //   console.log(`selectedValue changed from ${change.previousValue} to ${change.currentValue}`);
    //   if (change.isFirstChange()) {
    //     console.log('for the first time');
    //   }

    // }
  }

  ngOnDestroy(): void {
    console.log('Selector Destroyed');
  }


  onChooseValue(value: string) {
    this.onSelection.emit(value);
  }

}
