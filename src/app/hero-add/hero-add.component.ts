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
  heroAbility?: string
  heroType?: string
  heroSide?: string


  constructor(private heroesService : HeroesServices, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  onClick() {
    const newHero: Hero = {
      id: this.heroId,
      name: this.heroName!,
      ability: this.heroAbility!,
      type: this.heroType!,
      side: this.heroSide!

    }
    this.heroesService.addHero(newHero)
    this.cd.detectChanges()
  }
}
