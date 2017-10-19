import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class TriviaApiService {

  token: number;

  constructor(private http: Http) { }

  getQuestion() {
    if (!this.token) {
      return this.http.get('https://opentdb.com/api_token.php?command=request')
        .map(response => response.json())
        .mergeMap(data => {
          this.token = data.token;
          return this.http.get('https://opentdb.com/api.php?amount=1&token=' + this.token);
        })
        .map(response => response.json().results);
    }

    return this.http.get('https://opentdb.com/api.php?amount=1&token=' + this.token)
      .map(response => response.json().results);
  }
}
