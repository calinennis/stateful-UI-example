import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getPeople } from '../../state/reducers/app';
import { Person } from './../../models/person.model';
import { LoadPeople } from './../../state/actions/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Observable<Person[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.people = this.store.pipe(select(getPeople));

    this.store.dispatch(new LoadPeople());
  }
}
