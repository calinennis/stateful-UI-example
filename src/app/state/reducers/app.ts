import { ActionReducerMap } from '@ngrx/store';
import * as fromPeople from './people';

export interface AppState {
  people: fromPeople.State;
}


export const appReducer: ActionReducerMap<AppState> = {
  people: fromPeople.reducer
};
