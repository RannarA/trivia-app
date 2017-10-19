import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TriviaAppComponent} from './trivia-app/trivia-app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatDialogModule, MatProgressBarModule, MatRadioModule,
  MatToolbarModule
} from '@angular/material';
import { ToolbarComponent } from './containers/toolbar/toolbar.component';
import { TriviaSectionComponent } from './components/trivia-section/trivia-section.component';
import {TriviaApiService} from './services/trivia-api.service';
import {HttpModule} from '@angular/http';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    // components
    TriviaAppComponent,
    ToolbarComponent,
    TriviaSectionComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatRadioModule,
    MatButtonModule,
    HttpModule,
    FormsModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  providers: [
    // services
    TriviaApiService
  ],
  exports: [
    TriviaAppComponent
  ],
  entryComponents: [DialogComponent]
})
export class TriviaAppModule {}
