import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}

  triggerShowAll() {
    alert(
      'WHAT DO I DO HERE?! Do I try and two way bind a property from my parent to my child and worry about change detection? Do I have to create a singleton service that tracks the state of my person details showing/not showing?'
    );
  }
}
