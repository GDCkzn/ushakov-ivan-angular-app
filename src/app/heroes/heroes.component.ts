import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;
  heroName: string = "";

  constructor() { }

  ngOnInit() {
  }

  onSelectredHero(hero: Hero){
    this.selectedHero = hero
  }


  onAddHero(hero: Hero) {
    this.heroes.push(hero)
  }
}
