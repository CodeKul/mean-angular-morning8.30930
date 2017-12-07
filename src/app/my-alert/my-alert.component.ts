import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-alert',
  templateUrl: './my-alert.component.html',
  styleUrls: ['./my-alert.component.css']
})
export class MyAlertComponent implements OnInit {

  ttl: string
  msg: string
  typ: string
  isAl: boolean;

  constructor() {
    this.ttl = `Welcome to codekul`
    // tslint:disable-next-line:max-line-length
    this.msg = `Studying Web Technologies is perfect choice for students.These fields are having exciting areas of study like graphic designing, SEO, online (social) Marketing, coding and many more...`
    this.typ = `text`
  }

  ngOnInit() {
  }

  onBtnClick() {
    console.log(`Button clicked`);
    this.isAl = !this.isAl;
  }
}
