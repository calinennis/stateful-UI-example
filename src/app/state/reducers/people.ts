import { PersonDisplay } from './../../models/person-display.model';
import { Person } from '../../models/person.model';
import { PeopleActionUnion, PeopleActionTypes } from '../actions/people';


export interface State {
  people: Person[];
  loading: boolean;
  loaded: boolean;
  error: boolean;
  peopleDisplay: PersonDisplay[];
}

const initalState: State = {
  people: [],
  loading: false,
  loaded: false,
  error: false,
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
    case PeopleActionTypes.SetInitialDisplay:
      return { ...state, peopleDisplay: action.payload };
    case PeopleActionTypes.ShowAll:
      const allDisplay: PersonDisplay[] = state.peopleDisplay.map(people => {
        people.isShowing = true;
        return people;
      });
      return { ...state, peopleDisplay: allDisplay };
    case PeopleActionTypes.ShowPersonDetails:
      const newDisplayTrue: PersonDisplay[] = flipOneDisplay(state.peopleDisplay, action.payload, true);
      return { ...state, peopleDisplay: newDisplayTrue };
    case PeopleActionTypes.HidePersonDetails:
      const newDisplayFalse: PersonDisplay[] = flipOneDisplay(state.peopleDisplay, action.payload, false);
      return {...state, peopleDisplay: newDisplayFalse };
    default:
      return state;
  }
}

function flipOneDisplay(people: PersonDisplay[], id: number, value: boolean): PersonDisplay[] {
  return people.map(
    person => {
      if (person.id === id) {
        person.isShowing = value;
        return person;
      }
      return person;
    }
  );
}

export const getPeopleProperty = (state: State) => state.people;
export const getPeopleDisplayProperty = (state: State) => state.peopleDisplay;
