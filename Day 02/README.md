## Day 02 - Promises, Functional Programming and RxJS
### Projects:
|     |     |
| --- | --- |
| [fun-with-di](fun-with-promises/) | Javascript Promises in Depth | 
| [fun-with-rxjs](fun-with-rxjs/) | Deep dive into Reactive Programming |

### Functional Programming
* We talked about **Functional Programming** as a pradigm. A programming method which:
  * Focuses on functions rather than objects.
  * Treats functions as a first class value that can be passed arround between variables and other functions
  * Ecourages immutability, and pure functions
* We defined the term **Higher order function** as a function that either accepts a function as parameter or returns a function as value
* We talked about **Functors** - A box that encapsulates a function that can calculate a value. To be called a `Functor` the wrapper must have the following members:
  * A `Unit` operator: `T => B<T>`. A function that takes a literal value and wraps in inside the "box"
  * A `Bind` operator: `(B<T>, T => R) => B<R>`. A function that accepts a box, and a function, and returns a box that composes the original logic with the new function.
  * An `Unwrap` operator: `B<T> => T`. A function that extracts the value from the box. 
* The meaning of the `Bind` operator is that such boxes, that encapsulate logic, can take an additional piece of logic and create a more sophisticated box with the combined logic. This is the core of functional programming where you compose small functions to create bigger ones. 
* We defined a table of 4 such boxes:


|   | Single   | Plural   |
|-------------- | -------------- | -------------- |
| **Pull**    | `Lazy<T>`     | `IEnumrable<T>`     |
| **Push** | `Task<T>` | `Observable<T>` |

* In **Pull** - The objects block when you request to unwrap the value until the value is calculated synchronously
* In **Push** - the objects use callbacks to push the value asynchronously.

### Javascript Promises
* A `Promise<T>` is a box containing 2 private properties:
  * `Status` can either be `In progress`, `Completed` or `Failed`
  * `Result` of type T, exists only when the promise is completed
* The fields are private so that they can only be read using **Push**.
* You register a callback to the `Complete` status using the `.then(T => R) method`. 
* You register a callback to the `Error` status using the `.catch(err => void) method`.
* We saw how to create a promise using the `Promise Constructor`.
* We understood what `async` and `await` keywords do and how do they affect the compilation
* We understood that the `.then` method, and the `async` keywords, also create promises, out of other promises
* We saw how to use `Promise.all` and `Promise.race` to group promises together and wrap them in a single promise that returns all the results from all the promises or from the first one to complete.

### Introduction to RxJS
* We understood the meaning of a `Stream`
* We defined what an `Observer<T>` is and understood that it has 3 methods
    * `next(T)`
    * `complete()`
    * `error(err)`
* We understood that `Observable<T>` is an object that allows observers to subscribe
    * `subscribe(Observer<T>)`
* We saw how to define an observer explicitly by supplying the 3 methods and their implementation
* We saw how to create an observable using the `interval`, `of` and `from` factory operators
* We saw that 2 observers that subscribe on different times, get different sets of events that are not synchronized
* We understoof the difference between **cold** observables and **warm** observables
* We saw how to create a custom observable using the observable constructor
* We got familiar with the `Subject` object and understood that it is basically an event...
* We learned about `BehaviorSubject` and understood that it is just a subject that sends the latest event to a new observer on the moment of subscription
* We saw the `ReplaySubject` and understood that it is a subject that sends the history to late subscribers.
* We learned how to develop stateful services using `BehaviorSubject` and expose it as an observable using the `.asObservable()` method
* We understood that if we subscribe to an observable we must also unsubscribe from it when we are done with it to avoid memory leaks
* We saw that we can bind directly to an observable using the `async pipe` in the html

### Introduction to `RxJS` operators
* We talked about the concept of operators in math, strings and arrays
* We understood that RxJS operators create observables. 
* We saw 3 documentation web sites that serve as reference guide for reactive operators
    * [RxJS docs](https://rxjs-dev.firebaseapp.com/)
    * [Rx Marbles](https://rxmarbles.com/)
    * [RX Viz](https://rxviz.com/)
* We covered some factory operators
    * [from](https://rxjs-dev.firebaseapp.com/api/index/function/from)
    * [interval](https://rxjs-dev.firebaseapp.com/api/index/function/interval)
    * [of](https://rxjs-dev.firebaseapp.com/api/index/function/of)
* We converd some pipeable operators
    * [map](https://rxjs-dev.firebaseapp.com/api/operators/map)
    * [filter](https://rxjs-dev.firebaseapp.com/api/operators/filter)
    * [take](https://rxjs-dev.firebaseapp.com/api/operators/take)
    * [takeLast](https://rxjs-dev.firebaseapp.com/api/operators/takeLast)
    * [skip](https://rxjs-dev.firebaseapp.com/api/operators/skip)
    * [skipLast](https://rxjs-dev.firebaseapp.com/api/operators/skipLast)
    * [takeUntil](https://rxjs-dev.firebaseapp.com/api/operators/takeUntil)
