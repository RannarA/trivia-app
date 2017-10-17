import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TriviaAppComponent} from './trivia-app/trivia-app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatRadioModule, MatToolbarModule} from '@angular/material';
import { ToolbarComponent } from './containers/toolbar/toolbar.component';
import { TriviaSectionComponent } from './components/trivia-section/trivia-section.component';
import {TriviaApiService} from './services/trivia-api.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    // components
    TriviaAppComponent,
    ToolbarComponent,
    TriviaSectionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatRadioModule,
    MatButtonModule,
    HttpModule
  ],
  providers: [
    // services
    TriviaApiService
  ],
  exports: [
    TriviaAppComponent
  ]
})
export class TriviaAppModule {}
