import { createFeatureSelector, createSelector } from "@ngrx/store";
import { calcScore } from "./app.helpers";
import { appFeatureKey, AppState } from "./app.state";

export const root = createFeatureSelector<AppState>(appFeatureKey);

export const allQuestions = createSelector(root, state => state.questions);

export const allAnswers = createSelector(root, state => state.answers);

export const currentQuestionIndex = createSelector(allAnswers, all => all.length);

export const isDone = createSelector(allQuestions, currentQuestionIndex, (all, index) => index >= all.length);

export const currentQuestion = createSelector(allQuestions, currentQuestionIndex, (all, index) => all[index]);

export const score = createSelector(root, state => calcScore(state));