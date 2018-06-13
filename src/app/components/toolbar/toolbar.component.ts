import { ShowAllPeopleDetails } from './../../state/actions/people';
import { AppState } from './../../state/reducers/app';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  triggerShowAll() {
    this.store.dispatch(new ShowAllPeopleDetails());
  }
}
