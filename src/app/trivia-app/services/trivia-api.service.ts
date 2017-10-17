import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TriviaApiService {

  token: number;

  constructor(private http: Http) { }

  getToken() {
    return this.http.get('https://opentdb.com/api_token.php?command=request')
      .map(response => response.json().token);
  }

  getQuestion() {
    return this.http.get('https://opentdb.com/api.php?amount=1')
      .map(response => response.json().results)
  }
}
