## Day 03 - ScSS, Material, and Redux
### Projects:
|     |     |
| --- | --- |
| [quiz-mat-ngrx](quiz-mat-ngrx/) | Using Material and NgRx on real app | 

* We learned about SCSS style preproccessor and understood that it is basically a compiler that generates CSS from a language that is slightly higher than CSS
* We saw how to create compile time variables
* We saw how to use the **Nesting** feature to nest selectors
* We saw how to create compile time functions
* We saw how to use flow keywords like: 
    - `@if`
    - `@each`
* We saw how to define mixins using the `@mixin` keyword and use them with the `@include` keyword
* We understood that **partials** are scss files that do not generate CSS, but rather define functions, variables and mixins
* We saw how to use partials as modules using the `@use` keyword
* Finally we learned how to use compile time collections such as **lists** and **maps** and how to read a specific value from a map using the `map-get` function.

### Introduction to Angular Material
* We were introduced to material design and learned a few basic concepts
* We learned about the Color system and how to construct a theme from primary and accent palletes
* We learned about the typography of material, and icongraphy
* We saw how to incorporate Angular Material into our project using `ng add @angular/material`
* We used a dedicated module to compose all the component modules that we intend to use
* We saw how to use the material button, toolbar, icons, lists
* We saw how to use SCSS to automatically create CSS custom properties for all colors of the theme, and then use them in our components to style them accrding to the angular material theme.
* We have built a UI for our quiz application

### Redux and NgRx
* We learned about the core concepts of Redux
    - A **State** that holds the entire data in the application
    - A **Store** that stores the state and responsible to replace it with a new state after each action
    - An **Action** that the view dispatches in order to trigger a new state
    - A **Reducer** that calculates a new state from an existing one and an action, effectively turning the entire application into a state machine
    - A **Selector** that pulls a specific part of the state and serves it as an `Observable`
* We understood that redux belives in Uni-directional flow of data, where the store is the **Single point of truth** and data flows to it, and from it, through different routes
* We saw how to add `@ngrx/store` and `@ngrx/store-devtools` into our application
* We saw how to use the chrome extension for redux and how to configure the devtools to communicate with it
* We saw how to define the state
* We saw how to create a reducer from the initial state
* We saw how to define actions and how to group them under a namespace
* We saw how to define `on` parts in the reducer, that respond to specific actions and calculate the next state
* We saw how to dispatch actions from the components
* We saw how to define a hierarchy of selectors
    - We used `createFeatureSelector` to define the root selector
    - We used `createSelector` to create a selector from other more primitive selectors
* We saw how to use a selector to create observables which we can consume in the components
