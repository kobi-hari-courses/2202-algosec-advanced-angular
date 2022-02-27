import { Component, OnInit } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';
import { WrongAdditionService } from 'src/app/services/wrong-addition.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'], 
  providers: []
})
export class CalcComponent implements OnInit {
  result: number = 0;

  constructor(
    public additionService: AdditionService, 
    public wrongAdditionService: WrongAdditionService
  ) { }

  ngOnInit(): void {
  }

  add(n1: number, n2: number) {
    this.result = this.additionService.add(n1, n2);
  }

}
