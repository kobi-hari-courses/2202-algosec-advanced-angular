import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoDirective } from './directives/demo.directive';
import { StringSelectorComponent } from './components/string-selector/string-selector.component';
import { ItemTemplateDirective } from './components/string-selector/item-template.directive';
import { MessageComponent } from './components/message/message.component';
import { ExpanderComponent } from './components/expander/expander.component';
import { BlankDirective } from './directives/blank.directive';
import { IfDirective } from './directives/if.directive';
import { RepeaterDirective } from './directives/repeater.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoDirective,
    StringSelectorComponent,
    ItemTemplateDirective,
    MessageComponent,
    ExpanderComponent,
    BlankDirective,
    IfDirective,
    RepeaterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
