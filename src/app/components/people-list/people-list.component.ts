import { LoadPeople } from './../../state/actions/people';
import { Component, Input, OnInit } from '@angular/core';
import { Person } from './../../models/person.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, getPeople } from '../../state/reducers/app';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Observable<Person[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.people = this.store.pipe(
      select(getPeople)
    );

    this.store.dispatch(new LoadPeople());
  }
}
