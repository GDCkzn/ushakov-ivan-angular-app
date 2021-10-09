import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroesServices} from "../services/heroes.services";
import {EMPTY, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {HeroesState} from "../store/heroes.reducer";
import {getHeroes} from "../store/heroes.selector";
import {filter} from "rxjs/operators";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // heroes: Observable<Hero[]> = this.heroesService.heroes$;
  heroes: Observable<Hero[]> = this.store.select(getHeroes)
  hero: Hero[] = []


  constructor(private heroesService: HeroesServices, private store: Store<HeroesState>) {
    this.heroes.subscribe(x => console.log("asdasdsa", x))
  }

  ngOnInit() {

  }


}


