import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { Answer } from 'src/app/models/answer.model';
import { Question } from 'src/app/models/question.model';
import { AppSelectors } from 'src/app/redux/app.types';
import { map } from 'rxjs/operators';


type CellMode = 'Future' | 'Correct' | 'Wrong';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  data$: Observable<CellMode[]> = of(['Correct', 'Wrong', 'Correct', 'Future', 'Future', 'Future']);

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    const questions$ = this.store.select(AppSelectors.allQuestions);
    const answers$ = this.store.select(AppSelectors.allAnswers);

    this.data$ = combineLatest([questions$, answers$]).pipe(
      map(([questions, answers]) => this.extractCellModes(questions, answers))
    );
  }

  extractCellModes(questions: Question[], answers: Answer[]): CellMode[] {
    return questions.map((_, index) => answers.length < index + 1 
      ? 'Future' 
      : (answers[index].isCorrect ? 'Correct' : 'Wrong'));
    
  }

}
