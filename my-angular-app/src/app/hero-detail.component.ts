import { Hero } from './hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';
@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html',
  	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
	@Input() hero:Hero;
	constructor(
		private HeroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	){	}
	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.HeroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);
	}
	goBack():void {
		this.location.back();
	}
	save():void {
		this.HeroService.update(this.hero)
			.then(()=>this.goBack());
	}
}