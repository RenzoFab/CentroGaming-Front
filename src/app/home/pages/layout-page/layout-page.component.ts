import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/games/interfaces/game.interface';
import { GameService } from '../../../games/services/game.service';

@Component({
  selector: 'home-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css'],
})
export class LayoutPageComponent implements OnInit {
  gamesTrend: Game[] = [];
  gamesActual: Game[] = [];
  gameFav!: Game;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    const fechaActual = new Date();
    // BANNER
    this.getGameFav();

    // TENDENCIAS
    this.getGamesTrend();

    // ACTUALES
    this.getGamesActual();
  }

  private convertToDate(dateString: string): Date {
    const parts = dateString.split('/');
    return new Date(+parts[2], +parts[1] - 1, +parts[0]);
  }

  private getGameFav() {
    this.gameService.getGame('cyberpunk2077').subscribe((game) => {
      if (!game) return;
      this.gameFav = game;
      return;
    });
  }

  private getGamesTrend() {
    this.gameService.getGames().subscribe((games) => {
      this.gamesTrend = games
        .sort((a, b) => b.salesCount - a.salesCount)
        .slice(0, 6);
    });
  }

  private getGamesActual() {
    this.gameService.getGames().subscribe((games) => {
      this.gamesActual = games
        .sort((a, b) => {
          const fechaA = this.convertToDate(a.date);
          const fechaB = this.convertToDate(b.date);
          return fechaB.getTime() - fechaA.getTime();
        })
        .slice(0, 6);
    });
  }
}
