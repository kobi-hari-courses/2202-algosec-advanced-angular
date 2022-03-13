import { createReducer, on } from "@ngrx/store";
import { answerCurrentQuestion } from "./app.helpers";
import { initialAppState } from "./app.state";
import { AppActions } from "./app.types";

export const appReducer = createReducer(initialAppState, 
    on(AppActions.reset, () => initialAppState), 

    on(AppActions.answerCurrentQuestion, (state, action) => answerCurrentQuestion(state, action.answerIndex))
    
    );