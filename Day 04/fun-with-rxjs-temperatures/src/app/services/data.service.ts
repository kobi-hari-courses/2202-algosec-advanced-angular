import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, ConnectableObservable, interval, Observable, ReplaySubject, Subject, timer } from 'rxjs';
import { map, mapTo, multicast, publish, publishBehavior, publishReplay, refCount, share, shareReplay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource$: Observable<number>;

  /*
  multicast(subject) 
  */

  constructor(private http: HttpClient) {
    // const cold$ = timer(3000).pipe(
    //   mapTo(42),
    //   tap({
    //     next: val => console.log(`next: ${val}`), 
    //     complete: () => console.log(`completed`), 
    //     error: err => console.log(`error: ${err}`)
    //   })      
    //   );

    // const cold$ = interval(2000).pipe(
    //   take(10), 
    //   tap({
    //     next: val => console.log(`next: ${val}`), 
    //     complete: () => console.log(`completed`), 
    //     error: err => console.log(`error: ${err}`)
    //   })
    //   );

    const cold$ = this.http.get<number[]>('http://localhost:3000/values').
      pipe(
        map(values => values[0]),
        tap({
          next: val => console.log(`next: ${val}`), 
          complete: () => console.log(`completed`), 
          error: err => console.log(`error: ${err}`)
        })
        
        );

    const hot$ = cold$.pipe(
      // multicast(() => new ReplaySubject<number>(1)),
      // multicast(new ReplaySubject<number>(1)), 
      // publishReplay(4),
      // refCount()
      shareReplay({
        refCount: false, 
        bufferSize: 4
      })
    );

   // publish === multicast(new Subject())
   // publishBehavior(initialValue) === multicast(new BehaviorSubject(initialValue))
   // publishReplay(buffersize) === multicast(new ReplaySubject(bufferSize))

   // share === multicast(() => new Subject()), refCount()
   // shareReplay(bufferSize) === multicast(new ReplaySubject(bufferSize),  refcount**)
   // shareReplay({refCount: true, bufferSize}) === multicast(new ReplaySubject(bufferCount), refCount)

   // ** not really refCount, it only waits for the refernces to be > 0, to connect, but it never disconnects

    this.dataSource$ = hot$;
  }

  getData(): Observable<number> {
    return this.dataSource$;
  }
}
