import { Person } from './../../models/person.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnChanges {
  @Input() person: Person;
  @Input() showDetails: boolean;

  showPersonDetails: boolean;

  constructor() {}

  ngOnInit() {
    // if id is even or the all show flag is set, show details
    if (this.person.id % 2 === 0 || this.showDetails) {
      this.showPersonDetails = true;
      console.log(this.person.lastName, this.showPersonDetails);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.showPersonDetails = !!changes.showDetails.currentValue;
  }

  toggleDetails() {
    this.showPersonDetails = !this.showPersonDetails;
  }
}
