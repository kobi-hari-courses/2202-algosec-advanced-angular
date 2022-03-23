## Day 04 - RxJS Operators, Directive Deep Dive
### Projects:
|     |     |
| --- | --- |
| [fun-with-colors](fun-with-colors/) | Selected RxJS Operators | 
| [fun-with-rxjs-temperatures](fun-with-rxjs-temperatures/) | RxJS Multicasting operators | 
| [fun-with-components](fun-with-components/) | Angular Components and Directives | 


### Colors Search app using rx operators
* We created an example that uses observable to convert color search keyword into a list of matching results (colors)
* We Understood that the `map` operator cannot be used when we apply an asyncronous function on each event because it creates an Observable of Promises
* We saw how to use `mergeMap` and `switchMap` as asynchronous alternative for map when using async projections
    - `mergeMap(x => observable)` is actually short for `map(x => observable), mergeAll()`
    - `switchMap(x => observable)` is actually short for `map(x => observable), switchAll()`
* We understood the difference between [mergeMap](https://rxjs-dev.firebaseapp.com/api/operators/mergeMap) and [switchMap](https://rxjs-dev.firebaseapp.com/api/operators/switchMap)

### Multicast with factory
* We saw that `multicast` has 2 versions
  * `multicast(Subject)` uses the same subject to re-connect to the source
  * `multicast(() => Subject)` creates a new subject when reconnecting to source.
* We saw that when using a single subject, if it receives `complete` then it no longer listens to the source even if it is reconnected.
* We saw that when using a subject factory, even if the subject received `complete` before, it will use a new subject and therefore still get and pass events on.

### Publish and its variations
* We saw that `publish()` is shortcut for `multicast(() => new Subject())`.
  * When used with `refCount` if source throws `complete` then all new subscribers will receive `complete`
  * But, if subscribers count goes down to 0, new subscribers will receive a new sequnece of `next` events, since a new subject is created for each connection
* `publishBehavior(value)` is shortcut for `multicast(new BehaviorSubject(value))`. So it uses the same subject to reconnect. Meaning that if the subject receives `complete` it will return `complete` to all subscribers, even if it reconnects
* `publishReplay(buffer)` is shortcut for `multicast(() => new ReplaySubject(buffer))` so it uses a **new subject for each reconnection**. Which means that if it has to reconnect, the history will be forgotten, since we switch to a new subject.

### Share and its variations
* `share()` is shortcut for `multicast(() => new Subject) + refCount`
  * It will use a new subject on each connection.
  * Essentially, it is also shortcut for `publish() + refCount`
* `shareReplay` is special for some reasons
  * It uses `ReplaySubject` but does not use `multicast` (!!!)
  * It has 2 different variations of its own, controlled by a `Config` parameter that it receives
  * It has 2 modes: with refcount, or without.
* `shareReplay({refCount: false})` is a little confusing because it **DOES** actually count references, but only in order to decide when to connect. It never disconnects (!!!)
  * Will only use a single subject
  * Will only use a single connection that will never disconnect
  * History is therefore maintained for all future subscribers
  * Perfect for lazy fetch and caching of constant data from a server
  * Is the default, so: `shareReplay(bufferCount, windowTime)` is the same as `shareReplay({refCount: false, bufferCount, windowTime})`
* `shareReplay({refCount:true})` is a little different and it is there for backwards compatibility because up intil version 6.5 this was the only behavior.
  * refCount is done the same as with the operator, so it counts references and disconnects when reference counting reaches 0.
  * If the source completes, then the same subject will remain, which means that future connections will not occur
  * If the source does not complete, and refernce count drops to 0, it will reconnect on the next subscribe, **but with the a new subject**. So history will be removed.


### Caching
* After having inspected all the possible variations, it is clear that `shareReplay(1)` is the best option for caching of constant values:
  * It uses the same subject every time
  * It never disconnects from source and never reconnects - so the source will only ever run once.
  * It caches the result so that any new subscribers will forever get the last result
* The only problem - is that if `shareReplay(1)` is used with infinite sources, then it will never disconnect, which leads to memory leaks. 
* Conclusion: **`shareReplay(1)` is perfect for caching values of finite observables only**. 
* Also - it must be used with constant data because the data will only be fetched once. If you need to refresh the data every once in a while - we need to find a different mechanism for that.

### Components in Angular
* We refreshed our memory about how to write a component and use `@Input` and `@Output`
* We also saw that we can use `@Input` with property getters and setters instead of plain fields which allows us to respond to input changes
* We saw another way to respond to input changes, using the `OnChanges` lifecycle hook

### Content Projection
* We saw how to use `<ng-content>` in order to project content into the component template
* We saw that the content is created and initialized even if it is not projected at all
* We saw that even if the content is projected more than once, it will never be duplicated. Instead each <ng-content> may select some parts of the content to project, but each part of the content will mostly be projected once.
* We saw how to use `<ng-content select>` in order to divide different parts of the content between different content projectors
* We saw how to inject the content into the component **typescript** by using the `ContentChild` and `ContentChildren` decorators

### Directives
* We saw how to create element directives
* We saw how to modify the host element using the `ElementRef` and understood why it is not recommended
* We saw how to use the `Renderer2` object instead, and understoof that it is a better way, but not the best
* We saw how to use `@HostBinding` and `@HostListener` to create binding between the host properties and events, and the directive
* We saw that directives can have `@Input` and `@Output` just like components do
* We saw that we can create an input with the same name as the directive to simplify the syntax of the input
* We saw that directives and components can be injected into each other to create compond components
    - Parent can have access to its child components and directives using `@ContentChildren` and `@ContentChild`
    - Children may have access to their parent component using simple dependency injection
