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
    // JUEGOS
    this.getGamesData();
  }

  private convertToDate(dateString: string): Date {
    const parts = dateString.split('/');
    return new Date(+parts[2], +parts[1] - 1, +parts[0]);
  }

  private getGameFav(games: Game[], id: string = 'cyberpunk2077') {
    return games.find((game) => game.id === id) || ({} as Game);
  }

  private getTrendingGames(games: Game[], count: number = 6): Game[] {
    return games.sort((a, b) => b.salesCount - a.salesCount).slice(0, count);
  }

  private getNewestGames(games: Game[], count: number = 6): Game[] {
    return games
      .sort((a, b) => {
        const fechaA = this.convertToDate(a.date);
        const fechaB = this.convertToDate(b.date);
        return fechaB.getTime() - fechaA.getTime();
      })
      .slice(0, count);
  }

  private getGamesData() {
    this.gameService.getGames().subscribe((games) => {
      if (games) {
        this.gameFav = this.getGameFav(games, 'starfield');
        this.gamesTrend = this.getTrendingGames(games);
        this.gamesActual = this.getNewestGames(games, 6);
      }
    });
  }
}
