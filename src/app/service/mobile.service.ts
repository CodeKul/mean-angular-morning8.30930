import { EventEmitter } from '@angular/core'
import { IotService } from './iot.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MobileService {

  private communicator: EventEmitter<any>
  constructor(
    private iot: IotService
  ) {
    this.communicator = new EventEmitter()
  }

  throwAlert(type: string) {
    this.communicator.emit({
      alert: true,
      [`alert-${type}`]: true
    })
  }

  listenThrownAlert(callBack: (obj: any) => void) {
    this.communicator.subscribe(alObj => callBack(alObj))
  }
}
