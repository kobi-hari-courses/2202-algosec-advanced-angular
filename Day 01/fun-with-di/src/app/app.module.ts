import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';
import { PREFIX_TOKEN } from './constants/injection-tokens';
import { AdditionService } from './services/addition.service';
import { HistoryService } from './services/history.service';
import { WrongAdditionService } from './services/wrong-addition.service';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: PREFIX_TOKEN, 
      useValue: '+-+-+-'
    },
    {
      provide: WrongAdditionService, 
      useClass: WrongAdditionService
    }, 
    {
      provide: AdditionService, 
      useExisting: WrongAdditionService
    }, 
    {
      provide: APP_INITIALIZER, 
      useValue: () => console.log('Hello World'), 
      multi: true
    }, 
    {
      provide: APP_INITIALIZER, 
      useValue: () => console.log('Ma hamatsav'), 
      multi: true
    }, 
    {
      provide: APP_INITIALIZER, 
      useFactory: (history: HistoryService) => (() =>  history.init()), 
      deps: [HistoryService], 
      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
