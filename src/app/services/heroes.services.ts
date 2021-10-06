import {Injectable} from "@angular/core";
import {Hero} from "../hero";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {NgIf} from "@angular/common";

@Injectable({providedIn: "root"})
export class HeroesServices {


  public heroes$ = new BehaviorSubject<Hero[]>([
    {id: 11, name: 'Dr Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
  ])


  constructor(private toastr: ToastrService) {
    this.heroes$.subscribe(x => {
      console.log(x)
      if (x.length === 0)
        this.toastr.error("героев в массиве 0")

      // this.toastr.success(x.length.toString())
    })
  }

  // get heroes(): Hero[] {
  //   return this._heroes
  // }

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
    // this.heroes = [...this.heroes.filter(x => x !== hero)]
    const arr = this.heroes$.value
    const result = arr.filter(x => x !== hero)
    this.heroes$.next(result)
    this.toastr.error('удален герой с именем', hero.name + ' ' + hero.id)




  }

  editHero(hero: Hero) {

  }
}


