import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Person, createPersonsArray } from './models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stateless UI Example';
  people: Array<Person>;
  showAllDetails = false;

  constructor() {
    this.people = createPersonsArray();
  }
}
