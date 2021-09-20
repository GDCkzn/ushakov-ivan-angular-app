import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";


@Component({
  selector: 'app-hero-list',
  template: `
    <app-hero-list-item
      *ngFor="let hero of heroes"
      [hero]="hero"
      [class.selected]="hero === selectedHero"
      (deletedHero)="onDeletedHero($event)"
      (click)="onSelect(hero)"
      (editedHero)="onEditedHero($event)">




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
  @Output() deletedHero: EventEmitter<Hero> = new EventEmitter<Hero>()
  @Input() heroes: Hero[] = []
  selectedHero?: Hero;
  @Output() editedHero: EventEmitter<Hero> = new EventEmitter<Hero>()


  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  onDeletedHero(hero: Hero) {
    this.deletedHero.emit(hero)
  }

  onEditedHero(hero: Hero){
    this.editedHero.emit(hero)
  }


}

