## Day 05 - Views, Templates and Structural Directives
### Projects:
|     |     |
| --- | --- |
| [fun-with-components](fun-with-components/) | Continued deep dive into directives and components | 
| [fun-with-templates](fun-with-templates/) | About templates and dynamic view creation | 

### Containers and Templates
* We saw how to use `<ng-container>` in order to create a container element that will not appear in the final DOM
* We saw that we can still place directives on the container
* We saw how to define a reusable piece of `html` using `<ng-template>`
* We saw how to define local varibles that can be bound to inside the template using the `let-*` attributes
* We saw how to use the template inside an `<ng-container>` using the `*ngTemplateOutlet` directive
* We saw how to supply the data to be bound to using the `context` and `$implicit` keywords, although we did not quite understand the syntax fully (to be concluded)
* Finally, we saw how comnponents may receive templates as input, and use them in their own templates. This allows us to create much more customizable components.

### Views in Angular
* We reminded that direct DOM manipulation in angular is discouraged. Instead we should use the following tools to perform low level manipulations:
    - `Renderer` - In order to perform element manipulations such as setting attributes, properties, styles and classes
    - `ViewContainerRef` - In order to perform structural modifications to the DOM
* We understood that angular works with 2 versions of the visual tree
    - The "View Hierarchy" where angular maintains a tree of views (We will define what a view is, in a minute)
    - The actual DOM (which we should not assume anything about becuase it depends on specific platform)
* We understood the definition of a view: 
    - A minimal set of elements created and destroyed together. 
* We saw that there are 2 types of views:
    - **Embedded View** - Created from a template
    - **Host View** - Created from a component
* Angular uses a set of objects in the "view world":
    - `ElementRef` a wrapper around a single DOM node.
    - `TemplateRef` a wrapper around an angular template
    - `ViewRef` a base class that represents a complete view: an atomic set of elements that are created and destroyed together.
    - `EmbeddedViewRef` a subclass of `ViewRef` that represents a view that was created out of a template
    - `ComponentRef` represents an instance of component and contains a `ViewRef` for the hosted view
* We learned about the `ViewContainerRef`
    - There is one per element
    - Knows how to inject views after that element
    - Maintains a collection of `ViewRef` objects and allows to add, remove, move them.
* We saw how to create the two types of views programatically
    - `TemplateRef.createEmbeddedView` creates an embedded view from a template, receives an object that will be used as data context inside the template
    - `ComponentFactory.create` creates a `ComponentRef` with a `HostViewRef`. Receives an injector and passes it on to the component.
* We also saw that the `ViewContainerRef` provides shortcuts that both create a view and insert it into the collection.
* We saw how to use `*ngTemplateOutlet` directive in order to create an `EmbeddedView` declaratively.

### `@ViewChild`
- We understood the meaning of "view" and the difference between the view and the content.
- We saw how to use the `@ViewChild` decorator to select view elements
- We understood the `AfterViewInit` hook as way to ensure that the view children are initialized.
- We saw how to use the `read` property to define what we want to select from the view
  - The `ElementRef`
  - The component or directive
  - The `TemplateRef` 
  - The `ViewContainerRef`
- We saw how to use `@ViewChildren` to select a list of view children instead of the "first one"
- We saw how to use a template reference (`<element #ref>`) in order to narrow the `@ViewChild` query only to a single specific element.

### Structural Directives
* We saw how to use the microsyntax
  * To populate directive inputs
  * To define template variables and assign context values into them
* We saw how to write a strcutural directive that accepts a template and some additional inputs and invalidates its view container ref accordingly
* We wrote 2 examples
  * Our own version of `ngIf`
  * Our own custom directive: `myRepeat` which repeats the same template various times according to a counter


### Some additional links
* [The `ng-container` in depth](https://netbasal.com/getting-to-know-the-ng-container-directive-in-angular-a97b7a33c8ea)
* [All about the `ViewContainerRef`](https://medium.com/nerd-for-tech/angular-viewcontainerref-a1e8d08eabc2)
* [Medium - Understanding the `ViewContainerRef` better](https://netbasal.com/angular-2-understanding-viewcontainerref-acc183f3b682)
* [In Depth Dev - Exploring Angular DOM manipulation](https://indepth.dev/posts/1052/exploring-angular-dom-manipulation-techniques-using-viewcontainerref)


