import { Person } from './../../models/person.model';
import { Action } from '@ngrx/store';

export enum PeopleActionTypes {
  Load = '[People] Load People',
  LoadSuccess = '[People] Successfully Load People',
  LoadFailure = '[People] People Failed to Load',
  ShowAll = '[People] Show the detail form for all people'
}

export class LoadPeople implements Action {
  readonly type = PeopleActionTypes.Load;
}

export class LoadPeopleSuccess implements Action {
  readonly type = PeopleActionTypes.LoadSuccess;

  constructor(public payload: Person[]) {}
}

export class LoadPeopleFailure implements Action {
  readonly type = PeopleActionTypes.LoadFailure;
}

export class ShowAllPeopleDetails implements Action {
  readonly type = PeopleActionTypes.ShowAll;
}

export type PeopleActionUnion =
  | LoadPeople
  | LoadPeopleSuccess
  | LoadPeopleFailure
  | ShowAllPeopleDetails;
