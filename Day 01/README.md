## Day 01 - Dependency Injection Modules in Angular and Routing
### Projects:
|     |     |
| --- | --- |
| [fun-with-di](fun-with-di/) | Angular Dependency Injection in depth | 
| [fun-with-modules](fun-with-modules/) | About angular modules |
| [fun-with-routing](fun-with-routing/) | Advanceed routing scenraios |

### Introduction to Dependency Injection 
* We talked about the motivation to use a dependency injection infrastructure
* We saw how to create a service - an object encapsulating a bit of logic and perhaps data
* We defined the terms:
    * **Consumer** - The object that requires the injection
    * **Injection request/Token** - A token identifying what the consumer requests
    * **Injector** - An object responsible for resolving (providing, injecting) the injection request
    * **Provider** - The algorithm, or logic, used to create the injected object or value
* We saw how to define injecter and provider using the `providers` property of a Module, or Component
* We understood the effect of defining a component as injector, and how to use the DOM hierarchy as injector hierarchy
* We saw how to define a service as Injectable so it can also consume dependencies
* We understood the difference between using the `providedIn` property in the `@Injectable` decorator and using the `providers` property in the `@NgModule` decorator. Specifically we saw that the first method allows **Tree shaking**
* We saw how to use the various possible providers:
    * **Class provider**: by specifying the class of object that needs to be created
    * **Existing provider**: by specifying an alternative token to use instead of the requested one
    * **Value provider**: by specifying the final value to be provided - especially useful with custom injection tokens
    * **Factory provider**: by specifying a factory method, possibly with additional dependencies
* We saw the effect of the `multi` attribute, that specifies that a token has many providers, and the consumer actually receives a collection of values
* We saw how to define our own `InjectionToken` and inject a value
* We saw how Angular uses the `Dependency Injection` mechanism to support additional scenarios: 
    * Passing configuration constants to subtrees
    * Asynchronous initialization of services
    

### Modules in Angular
* We understood that angular provides us with 2 main features:
    * Extensions of the `HTML` language, using components, directives and pipes (A.K.A UI extensions)
    * A distributed Dependency Injection mechanism
* We understood that there are 2 types of modules that we encounter when we work in angular
    * Typescript (NodeJS) modules - basically any typescript file that contains the keyword `export` at least once
    * Angular modules - any class that carries the `@NgModule` decorator
* We understood that both types of modules involve the keywords `import` and `export` by they have very different meaning
    * Typescript `import` and `export` allow us to use a typescript identifier outside of the file where it was defined
    * Angular `import` and `export` are used to allow to use the `UI Extensions` declared in one module, in the templates declared in another.
    * Angular `import` is also used to import the set of providers defined in the module inside the `root injector`
* We saw that in order to use Module `B`'s components inside Module `A`, we need to directly import module `B` into module `A`
* We saw that a module may export not just it declared UI extensions, but also the extension it imports from other modules
* We saw that if 2 modules provide values for the same token, they overrun eachother. Which is why if modules that define a set of providers need to be imported multiple times, they usually provide a pair of static methods such as `forRoot` and `forChild` so that the same providers are not overridden.
* We understood that for this reason, the angular team recommends the following set of module types to be used as conventions:


| Module Type | Role | Imported ... |
| --- | --- | --- |
| App Module | The root module | Not imported, but bootstrapped |
| Core Module | Provider for global services and values | Imported once by the root module |
| Shared Module | Commonly used UI widgets | Imported many times by various modules |
| Feature Module | A set of related components loaded by the router | Not imported but lazy loaded by the router |
| Routing Module | 1-1 with each feature module, defines the routes of the module | Imported by the feature module |


### Advanced routing scenarios in Angular
* We talked about the role of the routing module
* We saw how to create a feature module
* We saw how to define nested routes and use a hierarchy of nested `router-outlets` to present them using the router
* We saw how to define nested `redirectTo` so each feature module also defines the default sub page
* We saw how to define lazy loading rules, so that when a subtree of routes is first accessed, the JS file is loaded from the server
