import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-comp-com',
  templateUrl: './inter-comp-com.component.html',
  styleUrls: ['./inter-comp-com.component.css']
})
export class InterCompComComponent implements OnInit {

  parVar: string;

  constructor() { }

  ngOnInit() {
  }

  onOneEmits(ev: string) {
    this.parVar = ev;
  }
}
