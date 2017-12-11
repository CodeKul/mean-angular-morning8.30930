import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  template: `
    <div class="jumbotron">
      <h1>
        {{twoIp}}
      </h1>
    </div>
  `,
  styles: []
})
export class TwoComponent implements OnInit {

  @Input()
  twoIp: string;

  constructor() { }

  ngOnInit() {
  }

}
