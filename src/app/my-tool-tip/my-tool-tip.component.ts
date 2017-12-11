import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-tool-tip',
  template: `
    <button
      type="button"
      class="btn btn-secondary"
      data-toggle="tooltip"
      [attr.data-placement]="where"
      [attr.title]="text"
      (click)="onNativeClick()">
      {{text}}
    </button>
  `,
  styles: [`
  `]
})
export class MyToolTipComponent implements OnInit {

  arr: Array<{ [key: string]: any }>;
  arrAnimal: Array<Animal>;

  @Input()
  text: string;

  @Input()
  where: string;

  @Output()
  clicked: EventEmitter<string>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit() {
  }

  onNativeClick() {
    this.clicked.emit(this.text);
  }
}

export class Animal {

}
