import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'games-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      if (games) this.games = games;
    });
  }
}
