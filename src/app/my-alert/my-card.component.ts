import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-card',
  template: `
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" src="..." alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
  </div>
  `,
  styles: []
})
export class MyCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
