import { Component } from '@angular/core';
import { AdditionService } from './services/addition.service';
import { WrongAdditionService } from './services/wrong-addition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'fun-with-di';
}
