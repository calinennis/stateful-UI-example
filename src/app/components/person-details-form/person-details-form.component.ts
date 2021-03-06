import { Person } from './../../models/person.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-details-form',
  templateUrl: './person-details-form.component.html',
  styleUrls: ['./person-details-form.component.scss']
})
export class PersonDetailsFormComponent implements OnInit {
  @Input()
  person: Person;

  @Output()
  hideForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  personDetailsForm: FormGroup;


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.personDetailsForm = new FormGroup({
      firstName: new FormControl(this.person.firstName, [Validators.required]),
      lastName: new FormControl(this.person.lastName, [Validators.required]),
      position: new FormControl(this.person.position, [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  cancelEdit() {
    this.hideForm.emit(true);
  }
}
