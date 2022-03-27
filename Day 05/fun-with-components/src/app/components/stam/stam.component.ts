import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stam',
  templateUrl: './stam.component.html',
  styleUrls: ['./stam.component.css']
})
export class StamComponent implements OnInit {
  @Input('appHighlight')
  background: string = '';

  constructor() { 

  }

  ngOnInit(): void {
    console.log(`app-stam.backgound = ${this.background}`);
  }

}
