import { Component } from '@angular/core';
import { from, interval, Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  createObserver(id: string): Observer<number> {
    return {
      next: res => console.log(`observer ${id} next ${res}`), 
      complete: () => console.log(`observer ${id} complete`), 
      error: err => console.log(`observer ${id} error ${err}`)
    }    
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createCustomObservable(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(42);

      setTimeout(() => observer.next(100), 2000);
      setTimeout(() => observer.next(200), 4000);
      setTimeout(() => observer.next(300), 5000);
      setTimeout(() => observer.complete(), 8000);
    });
  }

  go() {
    const observable = this.createCustomObservable();

    const observer1 = this.createObserver('1');
    const observer2 = this.createObserver('2');

    observable.subscribe(observer1);

    setTimeout(() => observable.subscribe(observer2), 3500);




  }
}
