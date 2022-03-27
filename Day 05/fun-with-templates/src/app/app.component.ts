import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['red', 'green', 'blue', 'purple'];
  sizes = ['24px', '40px', '68px'];
  fonts = ['Times new Roman', 'Arial', 'Segoe UI', 'Verdana', 'Courier new'];

  selectedColor = this.colors[1];
  selectedSize = this.sizes[2];
  selectedFont = this.fonts[0];

  condition: boolean = true;
  counter = 5;


  toggle() {
    this.condition = !this.condition;
  }

  inc() {
    this.counter ++;    
  }

  dec() {
    this.counter--;
  }


}
