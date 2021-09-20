import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import {ExampleService} from "../services/example.services";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(public exampleService : ExampleService) {

  }

  ngOnInit() {

  }

}
