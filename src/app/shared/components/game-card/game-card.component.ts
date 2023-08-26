import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/games/interfaces/game.interface';

@Component({
  selector: 'shared-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input()
  game!: Game;

  hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.game) throw Error('Property game is required');
  }

  onLoad() {
    // setTimeout(() => (this.hasLoaded = true), 1000);
    this.hasLoaded = true;
  }
}
