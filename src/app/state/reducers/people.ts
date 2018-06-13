import { Person } from '../../models/person.model';

export interface State {
  people: Array<Person>;
  showDetails: boolean;
}

const initalState: State = {
  people: [],
  showDetails: false
};

export function reducer(state: State = initalState, action): State {
  switch (action.type) {
    default:
      return state;
  }
}
