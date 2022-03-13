import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { QuizDoneComponent } from './components/quiz-done/quiz-done.component';

const routes: Routes = [
  {path: '', redirectTo: 'question', pathMatch: 'full'},
  {path: 'question', component: QuestionPresenterComponent}, 
  {path: 'done', component: QuizDoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
