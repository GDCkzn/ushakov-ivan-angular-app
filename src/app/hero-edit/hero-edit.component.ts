import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-edit',
  template: `
    <div *ngIf="hero">
      <div>{{hero?.name | uppercase}} Details</div>
      <div><span>id:</span>{{hero?.id}}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="hero!.name" placeholder="name">
      </div>
    </div>
  `,
  styles: []
})
export class HeroEditComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() {
  }

  ngOnInit(): void {
  }



}
