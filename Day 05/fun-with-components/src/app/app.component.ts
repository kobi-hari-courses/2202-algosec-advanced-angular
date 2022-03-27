import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = [
    'red', 
    'green', 
    'blue', 
    'brown', 
    'purple', 
    'black'
  ];

  selectedValue = 'purple';

  changeSelectedValue() {
    this.selectedValue = 'red';
  }
}
