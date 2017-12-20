import { CalcService } from './calc.service';
import { Component, OnInit } from '@angular/core';
import { Calc } from './calc';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
  providers: [CalcService]
})
export class CalcComponent implements OnInit {

  resMsg: string;

  constructor(
    private calc: CalcService
  ) { }

  ngOnInit() {
  }

  onCalc(num1: number, num2: number, operation: string) {
    let clc = new Calc()
    clc.num1 = num1
    clc.num2 = num2
    clc.operation = operation

    this.calc.performOperation(clc, result => {
      console.log(result)
      this.resMsg = `the result of ${result.msg} is ${result.res}`;
    });
  }
}
