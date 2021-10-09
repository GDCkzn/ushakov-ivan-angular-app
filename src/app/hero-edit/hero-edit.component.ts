import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";
import {Store} from "@ngrx/store";
import {editHero, editSave} from "../store/heroes.action";
import {Observable} from "rxjs";
import {getEditedHero, getHeroes} from "../store/heroes.selector";

@Component({
  selector: 'app-hero-edit',
  template: `
    <div *ngIf="hero$ | async; let hero">
      <div>{{hero?.name | uppercase}} Details</div>
      <div><span>id:</span>{{hero?.id}}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [ngModel]="hero!.name" (ngModelChange)="change($event, 'name', hero)" placeholder="name">
        <label for="hero-ability">Hero ability: </label>
        <input id="hero-ability" [ngModel]="hero!.ability" (ngModelChange)="change($event, 'ability', hero)" placeholder="ability">
        <label for="hero-side">Hero side: </label>
        <input id="hero-side" [ngModel]="hero!.side" (ngModelChange)="change($event, 'side', hero)" placeholder="side">
        <label for="hero-type">Hero type: </label>
        <input id="hero-type" [ngModel]="hero!.type" (ngModelChange)="change($event, 'type', hero)" placeholder="type">
        <button (click)=save(hero)>сохранить</button>
      </div>
    </div>
  `,
  styles: []
})
export class HeroEditComponent implements OnInit {
  hero$: Observable<Hero> = this.store.select(getEditedHero)


  constructor(private store: Store<{}>) {
  }

  ngOnInit(): void {
  }


  save(hero: Hero) {
    this.store.dispatch(editSave(
      {data: hero}
    ))
  }

  change(e: any, property: string, currentHeroValue: Hero) {
    const hero = {...currentHeroValue};
    hero[property] = e;
    this.store.dispatch(editSave(
      {data: hero}
    ))
  }
}
