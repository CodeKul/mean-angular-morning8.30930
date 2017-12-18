import { Component, OnInit } from '@angular/core';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-mob-two',
  template: `
    <div class="jumbotron">
      <input type="button" class="btn btn-success" value="Success" (click)="onClik('success')">
      <input type="button" class="btn btn-info" value="Info" (click)="onClik('info')">
      <input type="button" class="btn btn-danger" value="Danger" (click)="onClik('danger')">
    </div>
  `,
  styles: []
})
export class MobTwoComponent implements OnInit {

  constructor(
    private mob: MobileService
  ) { }

  ngOnInit() {
  }

  onClik(typ: string) {
    this.mob.throwAlert(typ);
  }
}
