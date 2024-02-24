// reducers.ts
import { createReducer, on } from '@ngrx/store';
import * as MainActions from '../actions/actions';
import { AppState } from '../app.state';

export const initialState: AppState = {
  selectedClass: '',
  currentStep: 1,
  totalSteps: 3,
};

export const appReducer = createReducer(
  initialState,
  on(MainActions.selectTile, (state, { className }) => ({
    ...state,
    selectedClass: className,
  })),
  on(MainActions.nextStep, (state) => ({
    ...state,
    currentStep: state.currentStep + 1,
  })),
  on(MainActions.previousStep, (state) => ({
    ...state,
    currentStep: state.currentStep - 1,
  }))
);
