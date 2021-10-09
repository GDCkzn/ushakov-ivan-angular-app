import {Injectable} from "@angular/core";
import {Hero} from "../hero";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {NgIf} from "@angular/common";

@Injectable({providedIn: "root"})
export class HeroesServices {


  public heroes$ = new BehaviorSubject<Hero[]>([
    {id: 11, name: 'Dr Nice', ability: 'mega mind', side: 'dire', type: 'melee'},
    {id: 12, name: 'Narco', ability: 'mind control', side: 'radiant', type: 'range'},
    {id: 13, name: 'Bombasto', ability: 'regeneration', side: 'radiant', type: 'melee'},
    {id: 14, name: 'Celeritas', ability: 'strength', side: 'dire', type: 'melee'},
    {id: 15, name: 'Magneta', ability: 'time travel', side: 'radiant', type: 'range'},
    {id: 16, name: 'RubberMan', ability: 'fly', side: 'dire', type: 'range'},
    {id: 17, name: 'Dynama', ability: 'iron suit', side: 'radiant', type: 'melee'},
    {id: 18, name: 'Dr IQ', ability: 'web', side: 'radiant', type: 'range and melee'},
    {id: 19, name: 'Magma', ability: 'spirit form', side: 'dire', type: 'melee'},
    {id: 20, name: 'Tornado', ability: 'wheelchair', side: 'radiant', type: 'nope'}
  ])


  constructor(private toastr: ToastrService) {
    this.heroes$.subscribe(x => {
      console.log(x)
      if (x.length === 0)
        this.toastr.error("героев в массиве 0")
    })
  }


  addHero(hero: Hero) {
    const heroes = this.heroes$.value
    const lastHero = heroes[heroes.length - 1]
    hero.id = lastHero.id + 1
    heroes.push(hero)
    this.heroes$.next(heroes)

    if (hero.name === "Иван")
      this.toastr.warning("какой иван ты че даун")
    else
      this.toastr.success('добавлен герой с именем ' + hero.name, hero.name + ' ' + hero.id)

  }


  deleteHero(hero: Hero) {
    const arr = this.heroes$.value
    const result = arr.filter(x => x !== hero)
    this.heroes$.next(result)
    this.toastr.error('удален герой с именем ' + hero.name, hero.name + ' ' + hero.id)


  }

  editHero(hero: Hero) {

  }
}


