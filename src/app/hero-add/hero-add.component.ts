import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-add',
  template: `
    <h2>добавление героя</h2>
    <input [(ngModel)]="heroName">
    <button (click)="onClick()">add hero</button>
  `,
  styles: []
})
export class HeroAddComponent implements OnInit {
  heroName?: string
  @Output() addHero: EventEmitter<Hero> = new EventEmitter<Hero>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    const newHero: Hero = {
      id: 22,
      name: this.heroName!
    }
    this.addHero.emit(newHero)

  }
}
