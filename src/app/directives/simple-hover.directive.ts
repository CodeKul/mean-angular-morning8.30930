import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[simpleHover]'
})
export class SimpleHoverDirective {

  @HostBinding('style.border')
  brd = '1px solid red';

  @HostBinding('class.alert')
  alt = true;

  @HostBinding('class.alert-success')
  cls = false;

  @HostListener('mouseenter')
  hovIn() {
    this.cls = true;
  }

  @HostListener('mouseleave')
  hovOut() {
    this.cls = false;
  }
  constructor() { }
}
