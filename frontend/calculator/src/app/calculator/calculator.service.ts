import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CalculatorService {
  constructor(private http: HttpClient) { }

  API_ROOT = "http://localhost:3000"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json; charset=utf-8"
    })
  };

  add(form) {
    let body = JSON.stringify(form);
    return this.http.post(this.API_ROOT + '/add', body, this.httpOptions);
  }
}