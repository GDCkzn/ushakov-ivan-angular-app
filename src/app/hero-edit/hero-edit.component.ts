import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";
import {ExampleService} from "../services/example.services";

@Component({
  selector: 'app-hero-edit',
  template: `
    <div *ngIf="hero">
      service:{{exampleService.text}}
      <div>{{hero?.name | uppercase}} Details</div>
      <div><span>id:</span>{{hero?.id}}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="hero!.name" placeholder="name">
      </div>
    </div>
  `,
  styles: []
})
export class HeroEditComponent implements OnInit {
  @Input() hero?: Hero;
  @Output() editedHero: EventEmitter<Hero> = new EventEmitter<Hero>()


  constructor(public exampleService : ExampleService) {
  }

  ngOnInit(): void {
  }



}
