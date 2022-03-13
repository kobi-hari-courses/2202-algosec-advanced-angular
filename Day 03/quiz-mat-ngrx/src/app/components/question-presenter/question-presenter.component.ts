import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Question } from 'src/app/models/question.model';
import { AppActions, AppSelectors } from 'src/app/redux/app.types';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.scss']
})
export class QuestionPresenterComponent implements OnInit {
  currentQuestion$!: Observable<Question>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.currentQuestion$ = this.store.select(AppSelectors.currentQuestion);
  }

  onAnswer(index: number) {
    const action = AppActions.answerCurrentQuestion({answerIndex: index});
    this.store.dispatch(action);
  }

}
