import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


type CellMode = 'Future' | 'Correct' | 'Wrong';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  data$: Observable<CellMode[]> = of(['Correct', 'Wrong', 'Correct', 'Future', 'Future', 'Future']);

  constructor() { }

  ngOnInit(): void {
  }

}
