import { Component } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, Observer, of, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowingReader = true;

  toggleReader() {
    this.isShowingReader = !this.isShowingReader;
  }


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

  createCustomSubject(): Observable<number> {
    const subject = new Subject<number>();

    subject.next(42);

    setTimeout(() => subject.next(100), 2000);
    setTimeout(() => subject.next(200), 4000);
    setTimeout(() => subject.next(300), 5000);
    setTimeout(() => subject.complete(), 8000);


    return subject;
  }

  createCustomBehaviorSubject(): Observable<number> {
    const subject = new BehaviorSubject<number>(42);

    setTimeout(() => subject.next(100), 2000);
    setTimeout(() => subject.next(200), 4000);
    setTimeout(() => subject.next(300), 5000);
    setTimeout(() => subject.complete(), 8000);


    return subject;

  }

  createCustomReplaySubject(): Observable<number> {
    const subject = new ReplaySubject<number>();

    subject.next(42);

    setTimeout(() => subject.next(100), 2000);
    setTimeout(() => subject.next(200), 4000);
    setTimeout(() => subject.next(300), 5000);
    setTimeout(() => subject.complete(), 8000);


    return subject;

  }


  go() {
    // of, from, interval
    // Observable()
    // interval(---) => 0---1---2---3---4---5---6....
    // timer(----) => ----0|
    // timer(----, --) => ----0--1--2--3--4--5--...
    // generate(initialValue, condition, interator, resultSelector) => 

    const observable = this.createCustomReplaySubject();

    const observer1 = this.createObserver('1');
    const observer2 = this.createObserver('2');

    observable.subscribe(observer1);

    setTimeout(() => observable.subscribe(observer2), 3500);




  }
}
