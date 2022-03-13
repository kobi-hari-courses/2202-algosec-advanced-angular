import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-quiz-done',
  templateUrl: './quiz-done.component.html',
  styleUrls: ['./quiz-done.component.scss']
})
export class QuizDoneComponent implements OnInit {
  score$: Observable<number> = of(0.7);

  constructor() { }

  ngOnInit(): void {
  }

}
