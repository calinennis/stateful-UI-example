import { PersonDisplay } from './../../models/person-display.model';
import { Person } from '../../models/person.model';
import { PeopleActionUnion, PeopleActionTypes } from '../actions/people';

export interface State {
  people: Person[];
  loading: boolean;
  loaded: boolean;
  error: boolean;
  showAllDetails: boolean;
  peopleDisplay: PersonDisplay[];
}

const initalState: State = {
  people: [],
  loading: false,
  loaded: false,
  error: false,
  showAllDetails: false,
  peopleDisplay: []
};

export function reducer(
  state: State = initalState,
  action: PeopleActionUnion
): State {
  switch (action.type) {
    case PeopleActionTypes.Load:
      return { ...state, loading: true };
    case PeopleActionTypes.LoadSuccess:
      return { ...state, loading: false, loaded: true, people: action.payload };
    case PeopleActionTypes.LoadFailure:
      return { ...state, loading: false, loaded: false, error: true };
    case PeopleActionTypes.ShowAll:
      return { ...state, showAllDetails: true };
    default:
      return state;
  }
}
