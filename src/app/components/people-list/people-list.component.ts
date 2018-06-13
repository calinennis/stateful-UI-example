import { Component, Input, OnInit } from '@angular/core';
import { Person } from './../../models/person.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  @Input() people: Array<Person>;

  @Input() showAllDetails: boolean;

  constructor() {}

  ngOnInit() {}
}
