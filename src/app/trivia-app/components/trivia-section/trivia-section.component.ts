import { Component, OnInit } from '@angular/core';
import {TriviaApiService} from '../../services/trivia-api.service';

@Component({
  selector: 'app-trivia-section',
  templateUrl: './trivia-section.component.html',
  styleUrls: ['./trivia-section.component.sass']
})
export class TriviaSectionComponent implements OnInit {

  questionData: any;

  constructor(private triviaApiService: TriviaApiService) { }

  ngOnInit() {
    this.triviaApiService.getQuestion().subscribe(data => {
      this.questionData = data
    });
  }

}
