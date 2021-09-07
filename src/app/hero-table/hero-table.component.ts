import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-table',
  template: `
    <h3>Таблица героев</h3>
    <table border="1">
      <tr>
        <th>Id</th>
        <th>Имя</th>
      </tr>
      <tr *ngFor="let hero1 of heroes">
        <td>{{hero1.id}}</td>
        <td>{{hero1.name}}</td>
    </table>
  `,
  styles: []
})
export class HeroTableComponent implements OnInit {

  @Input() heroes: Hero[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
