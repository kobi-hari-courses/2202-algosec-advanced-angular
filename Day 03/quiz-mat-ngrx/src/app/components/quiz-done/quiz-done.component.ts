import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppSelectors } from 'src/app/redux/app.types';

@Component({
  selector: 'app-quiz-done',
  templateUrl: './quiz-done.component.html',
  styleUrls: ['./quiz-done.component.scss']
})
export class QuizDoneComponent implements OnInit {
  score$!: Observable<number>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.score$ = this.store.select(AppSelectors.score);
  }

}
