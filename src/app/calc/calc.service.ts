import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calc } from './calc';

@Injectable()
export class CalcService {

  constructor(
    private http: HttpClient
  ) { }

  performOperation(clc: Calc, onResult: (res) => void) {
    this.http.post(
      'http://localhost:3000/calcv2',
      clc
    ).subscribe(
      (response: Response) => onResult(response.body),
      err  => onResult(err),
    );
  }
}
