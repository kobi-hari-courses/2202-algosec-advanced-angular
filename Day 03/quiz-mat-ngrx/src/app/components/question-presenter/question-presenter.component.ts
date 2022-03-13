import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.scss']
})
export class QuestionPresenterComponent implements OnInit {
  currentQuestion$: Observable<Question> = of({
    caption: 'How much is 2 plus 2', 
    answers: ['One', 'Two', 'Three', 'Four'], 
    correctAnswer: 3
  });

  constructor() { }

  ngOnInit(): void {
  }

}
