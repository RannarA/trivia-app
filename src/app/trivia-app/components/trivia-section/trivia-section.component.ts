import { Component, OnInit } from '@angular/core';
import {TriviaApiService} from '../../services/trivia-api.service';

@Component({
  selector: 'app-trivia-section',
  templateUrl: './trivia-section.component.html',
  styleUrls: ['./trivia-section.component.sass']
})
export class TriviaSectionComponent implements OnInit {

  question: string;
  answers: string[];
  correctAnswer: string;
  selectedAnswer: string;

  constructor(private triviaApiService: TriviaApiService) { }

  sendAnswer() {
    this.getQuestion();
  }

  getQuestion() {
    this.triviaApiService.getQuestion().subscribe(data => {
      this.question = data[0].question;
      this.correctAnswer = data[0].correct_answer;
      this.answers = data[0].incorrect_answers;
      this.answers.push(this.correctAnswer);
    });
  }

  ngOnInit() {
    this.getQuestion();
  }
}
