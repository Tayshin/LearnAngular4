import { Component } from '@angular/core';
import { Hero } from './hero';
import { OnInit } from '@angular/core'
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {
  ngOnInit():void{
    this.getHeroes();
  }
  constructor(private heroService: HeroService){
  }
  title = 'Tour of Heros';
  // hero:Hero ={
  // 	id:1,
  // 	name:'WindRanger'
  // }
  selectedHero:Hero;
  heroes:Hero[];
  onSelect(hero: Hero):void{
  	this.selectedHero = hero;
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}

