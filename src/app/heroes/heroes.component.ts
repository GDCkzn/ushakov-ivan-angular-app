import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ExampleService} from "../services/example.services";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = this.exampleService.heroes;
  selectedHero?: Hero;
  hero: Hero[] = []

  constructor(private exampleService : ExampleService) {
  }

  ngOnInit() {
    this.exampleService.text = "12333"
  }

  onAddHero(hero: Hero) {
    this.heroes.push(hero)
  }

  onDeletedHero(hero: Hero) {
    this.heroes = this.heroes.filter(x => x !== hero)
  }

  onEditedHero(hero: Hero){
    this.selectedHero = hero
  }



}
