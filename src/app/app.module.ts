import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TriviaAppModule} from './trivia-app/trivia-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TriviaAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
