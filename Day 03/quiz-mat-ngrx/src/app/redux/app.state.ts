import { ALL_QUESTIONS } from "../data/all-questions";
import { Answer } from "../models/answer.model";
import { Question } from "../models/question.model";

export const appFeatureKey = 'app';

export interface AppState {
    readonly questions: Question[], 
    readonly answers: Answer[]
}

export const initialAppState: AppState = {
    questions: ALL_QUESTIONS, 
    answers: []
}