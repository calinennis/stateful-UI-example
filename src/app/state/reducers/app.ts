import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromPeople from './people';

export interface AppState {
  people: fromPeople.State;
}


export const appReducer: ActionReducerMap<AppState> = {
  people: fromPeople.reducer
};

// select people state slice
export const selectPeopleState = (state: AppState) => state.people;

// people state property selectors
export const getPeople = createSelector(selectPeopleState, fromPeople.getPeople);
