import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";
import {HeroesServices} from "../services/heroes.services";

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
  heroId: number = 21

  constructor(private heroesService : HeroesServices, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  onClick() {
    const newHero: Hero = {
      id: this.heroId,
      name: this.heroName!
    }
    this.heroesService.addHero(newHero)
    this.cd.detectChanges()
  }
}
