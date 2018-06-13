import { PeopleEffects } from './state/effects/people';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonDetailsFormComponent } from './components/person-details-form/person-details-form.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/reducers/app';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/effects/app';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleComponent,
    PersonDetailsFormComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatSlideToggleModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AppEffects, PeopleEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
