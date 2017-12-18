import { Component, OnInit } from '@angular/core';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-mob-one',
  template: `
    <div class="jumbotron">
      <div [ngClass]="alTyp" role="alert">
        <strong>Well done!</strong> You successfully read this important alert message.
      </div>
    </div>
  `,
  styles: []
})
export class MobOneComponent implements OnInit {

  alTyp: any;

  constructor(
    private mob: MobileService
  ) { }

  ngOnInit() {
    this.mob.listenThrownAlert( alObj => this.alTyp = alObj)
  }
}
