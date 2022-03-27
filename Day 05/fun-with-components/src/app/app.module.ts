import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectorComponent } from './components/selector/selector.component';
import { ExpanderComponent } from './components/expander/expander.component';
import { ExpanderToggleDirective } from './components/expander/expander-toggle.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { StamComponent } from './components/stam/stam.component';
import { HeaderIncreaserDirective } from './directives/header-increaser.directive';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { KobiDirective } from './directives/kobi.directive';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    ExpanderComponent,
    ExpanderToggleDirective,
    HighlightDirective,
    StamComponent,
    HeaderIncreaserDirective,
    TableHeaderComponent,
    KobiDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
