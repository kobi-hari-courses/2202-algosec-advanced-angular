import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectorComponent } from './components/selector/selector.component';
import { ExpanderComponent } from './components/expander/expander.component';
import { ExpanderToggleDirective } from './components/expander/expander-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    ExpanderComponent,
    ExpanderToggleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
