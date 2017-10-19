import { Component, OnInit } from '@angular/core';
import {TriviaApiService} from '../../services/trivia-api.service';
import * as _ from 'lodash';
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material";

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
  correctAnswerCount = 0;
  showLoader = false;

  constructor(private triviaApiService: TriviaApiService, private dialog: MatDialog) { }

  sendAnswer() {
    this.showLoader = true;
    if (this.selectedAnswer === this.correctAnswer) {
      this.correctAnswerCount++;
      this.getQuestion();
    } else {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {count: this.correctAnswerCount}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getQuestion();
    });
  }

  getQuestion() {
    this.triviaApiService.getQuestion().subscribe(data => {
      this.showLoader = false;
      this.question = data[0].question;
      this.correctAnswer = data[0].correct_answer;
      this.answers = data[0].incorrect_answers;
      this.answers.push(this.correctAnswer);

      this.answers = _.shuffle(this.answers);
    });
  }

  ngOnInit() {
    this.getQuestion();
  }
}
