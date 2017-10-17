import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TriviaAppComponent} from './trivia-app/trivia-app.component';

@NgModule({
  declarations: [
    // components
    TriviaAppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // services

  ],
  exports: [
    TriviaAppComponent
  ]
})
export class TriviaAppModule {}
