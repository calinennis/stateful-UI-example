import { getPeople } from './../reducers/app';
import { AppState } from './../reducers/app';
import { PersonDisplay } from './../../models/person-display.model';
import { Person } from './../../models/person.model';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { createMockPeopleRequestSuccess } from '../../models/person.model';
import {
  LoadPeopleSuccess,
  SetInitialPeopleDisplay,
  PeopleActionTypes,
  PeopleActionUnion
} from './../actions/people';

@Injectable()
export class PeopleEffects {
  @Effect()
  loadPeople: Observable<Action> = this.actions
    .ofType<PeopleActionUnion>(PeopleActionTypes.Load)
    .pipe(
      switchMap(() => {
        return createMockPeopleRequestSuccess().pipe(
          map(people => new LoadPeopleSuccess(people))
        );
      })
    );

    @Effect()
    setPeopleDisplayState: Observable<Action> = this.actions
      .ofType<PeopleActionUnion>(PeopleActionTypes.LoadSuccess)
      .pipe(
        withLatestFrom(this.store.select(getPeople)),
        map(([action, people]) => {
          const peopleDisplayState: PersonDisplay[] = this.createInitialPeopleDisplaySettings(people);
          return new SetInitialPeopleDisplay(peopleDisplayState);
        })
      );

  constructor(private actions: Actions, private store: Store<AppState>) {}

  createInitialPeopleDisplaySettings(people: Person[] ): PersonDisplay[] {
    return people.map((person): PersonDisplay => {
      return {
        id: person.id,
        isShowing: false
      };
    });
  }
}
