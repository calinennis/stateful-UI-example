import { PersonDisplay } from './../../models/person-display.model';
import { Person } from '../../models/person.model';

export interface State {
  people: Person[];
  loading: boolean;
  loaded: boolean;
  showAllDetails: boolean;
  peopleDisplay: PersonDisplay[];
}

const initalState: State = {
  people: [],
  loading: false,
  loaded: false,
  showAllDetails: false,
  peopleDisplay: []
};

export function reducer(state: State = initalState, action): State {
  switch (action.type) {
    default:
      return state;
  }
}
