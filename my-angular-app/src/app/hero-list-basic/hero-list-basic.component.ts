import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@Component({
  selector: 'hero-list-basic',
  templateUrl:'./hero-list-basic.component.html',
  styleUrls: ['./hero-list-basic.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class HeroListBasicComponent {
    constructor(
        private heroService: HeroService
    ){}
    heroes:Hero[];
    getHeroes(): void {
        this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes);
    }
    ngOnInit():void{
        this.getHeroes();
    }
    

}
