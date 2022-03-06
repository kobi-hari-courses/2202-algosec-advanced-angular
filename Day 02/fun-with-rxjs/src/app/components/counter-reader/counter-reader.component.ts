import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent implements OnInit, OnDestroy {
  
  counterValue$!: Observable<number>;
  onDestroy$ = new Subject<void>();

  constructor(private counterService: CounterService) { 
  }

  ngOnInit() {

    // map, filter, reduce, scan

    this.counterValue$ = this.counterService
          .getValue()
          .pipe(
            tap(val => console.log('value changed to : ' + val))
          );

    this.counterService.getValue()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(val => console.log('this is the value: ' + val));

      
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}

