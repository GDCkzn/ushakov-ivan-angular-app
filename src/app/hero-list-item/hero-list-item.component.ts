import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroesServices} from "../services/heroes.services";

@Component({
  selector: 'app-hero-list-item',
  template: `
    <div class="hero-list-item">
      <div class="hero-id">{{hero?.id}}</div>
      <div class="hero-name" title="{{hero?.name}}" >{{hero?.name}}</div>
      <button class="hero-delete-btn btn btn-primary" (click)="delete(hero!)">удалить</button>
      <button class="hero-edit-btn" (click)="edit(hero!)">редактировать</button>
    </div>
  `,
  styles: [`
    .hero-list-item {
      display: flex;
      padding-top: 4px;
      padding-bottom: 4px;
    }

    .hero-name {
      margin-left: 8px;
      min-width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hero-list-item {}

    .hero-id {
      background-color: #ff9000;
      border: solid 2px lightgrey;
      border-radius: 8px;
      padding: 4px;
    }
  `
  ]
})
export class HeroListItemComponent implements OnInit {

  @Input() hero?: Hero

  constructor(private heroesService : HeroesServices, private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
  }

  delete(hero: Hero) {
    this.heroesService.deleteHero(hero)
    this.cd.detectChanges()
  }

  edit(hero: Hero) {
    this.heroesService.editHero(hero)
  }
}
