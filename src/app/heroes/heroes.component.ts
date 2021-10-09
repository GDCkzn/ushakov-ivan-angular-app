import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroesServices} from "../services/heroes.services";
import {Observable} from "rxjs";



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Observable<Hero[]> = this.heroesService.heroes$;
  selectedHero?: Hero;
  hero: Hero[] = []

  constructor(private heroesService : HeroesServices) {
  }

  ngOnInit() {

  }






}
