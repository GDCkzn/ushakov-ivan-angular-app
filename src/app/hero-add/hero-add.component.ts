import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {addHero} from "../store/heroes.action";


@Component({
  selector: 'app-hero-add',
  template: `
    <h2>добавление героя</h2>
    <input [(ngModel)]="heroName">
    <select name="side" [(ngModel)]="heroSide">
      <option value="dire">dire</option>
      <option value="radiant">radiant</option>
    </select>
    <select name="type" [(ngModel)]="heroType">
      <option value="range">range</option>
      <option value="melee">melee</option>
    </select>
    <input [(ngModel)]="heroAbility">
    <button id="addHero" (click)="addHero1()">add hero</button>
  `,
  styles: []
})
export class HeroAddComponent implements OnInit {
  heroName?: string
  heroId: number = 21
  heroAbility?: string
  heroType?: string
  heroSide?: string

  constructor(private store: Store<{}>) {
  }

  ngOnInit(): void {
  }

  // onClick() {
  //   const newHero: Hero = {
  //     id: this.heroId,
  //     name: this.heroName!,
  //     ability: this.heroAbility!,
  //     type: this.heroType!,
  //     side: this.heroSide!
  //
  //   }
  //   this.heroesService.addHero(newHero)
  // }

  addHero1() {
    this.store.dispatch(addHero({
      data: {
        id: this.heroId,
        type: this.heroType!,
        side: this.heroSide!,
        ability: this.heroAbility!,
        name: this.heroName!
      }
    }))
  }


}
