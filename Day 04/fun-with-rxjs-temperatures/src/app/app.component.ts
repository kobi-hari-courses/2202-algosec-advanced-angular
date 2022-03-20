import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataService){}
  
  toggles: boolean[] = [false, false, false, false];

  toggle(index: number) {
    this.toggles[index] = !this.toggles[index];
  }
}
