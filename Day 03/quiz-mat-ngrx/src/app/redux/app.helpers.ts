import { Answer } from "../models/answer.model";
import { AppState } from "./app.state";

export function calcScore(state: AppState): number {
    const numberOfCorrect = state
                .answers
                .filter(a => a.isCorrect)
                .length;
    return numberOfCorrect / state.questions.length;
}


export function answerCurrentQuestion(state: AppState, userAnswer: number): AppState {
    const currentQuestionIndex = state.answers.length;
    const currentQuestion = state.questions[currentQuestionIndex];

    const answers: Answer[] = [...state.answers, {
        answerIndex: userAnswer, 
        isCorrect: userAnswer === currentQuestion.correctAnswer
    }];

    const result: AppState = {
        ...state, 
        answers: answers
    };

    return result;
}