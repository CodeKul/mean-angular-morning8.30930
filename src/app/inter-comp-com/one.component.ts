import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `
    <div class="row alert alert-info">
      <div class="col-md-12">
        <input type="button" (click)="ipClick()">
      </div>
    </div>
  `,
  styles: []
})
export class OneComponent implements OnInit {

  @Output()
  oneEv: EventEmitter<string>;

  constructor() {
    this.oneEv = new EventEmitter();
  }

  ngOnInit() {
  }

  ipClick() {
    this.oneEv.emit(new Date().toString());
  }
}
