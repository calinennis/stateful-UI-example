import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../../state/reducers/app';
import { Person } from './../../models/person.model';
import { getPeopleDisplay } from './../../state/reducers/app';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  @Input() person: Person;
  showDetailForm: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.showDetailForm = this.store.pipe(
      select(getPeopleDisplay),
      map(people => people.find(person => this.person.id === person.id)),
      map(personDisplay => personDisplay.isShowing)
    );
  }

  toggleDetails() {
    // TODO: Create Action to Toggle Detail display state
  }
}
