import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/games/interfaces/game.interface';

@Component({
  selector: 'home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input()
  game!: Game;
}
