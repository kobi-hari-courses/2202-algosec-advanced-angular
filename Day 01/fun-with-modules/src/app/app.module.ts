import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StamModule } from './stam/stam.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([]), 
    BrowserModule, 
    StamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
