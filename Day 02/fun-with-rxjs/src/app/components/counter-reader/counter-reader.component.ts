import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css']
})
export class CounterReaderComponent implements OnInit, OnDestroy {
  counterValue!: number;
  sub!: Subscription;

  constructor(private counterService: CounterService) { 
  }

  ngOnInit() {
    this.sub = this.counterService
      .getValue()
      .subscribe(val => {
        console.log('counter changed to ' + val);
        this.counterValue = val
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();    
  }

}
