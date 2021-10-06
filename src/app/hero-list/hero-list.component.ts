import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";
import {EMPTY, Observable} from "rxjs";


@Component({
  selector: 'app-hero-list',
  template: `
    <app-hero-list-item
      *ngFor="let hero of heroes"
      [hero]="hero"
      [class.selected]="hero === selectedHero"

      (click)="onSelect(hero)"
    >
    </app-hero-list-item>
  `,
  styles: [`
    app-hero-list-item.selected {
      height: 100%;
      display: block;
      background-color: aqua;
    }
  `]
})
export class HeroListComponent implements OnInit {
  @Input() heroes$: Observable<Hero[]> = EMPTY
  selectedHero?: Hero;
  heroes?: Hero[] = []


  constructor() {
  }

  ngOnInit(): void {
    this.heroes$.subscribe(x => {
      this.heroes = x
    })
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }



}

