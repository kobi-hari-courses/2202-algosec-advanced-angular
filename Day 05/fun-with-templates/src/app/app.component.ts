import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    {
      from: -2, 
      to: 10
    }, 
    {
      from: -5, 
      to: 50
    },
    {
      from: 20, 
      to: 100
    }
  ]

  title = 'fun-with-templates';
}
