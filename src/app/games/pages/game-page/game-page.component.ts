import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'games-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css'],
})
export class GamePageComponent implements OnInit {
  game!: Game;
  hasLoaded = false;
  hasLoaded2 = false;
  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(switchMap(({ id }) => this.gameService.getGame(id)))
      .subscribe((game) => {
        if (!game) return this.router.navigateByUrl('/games/list');
        this.game = game;
        return;
      });
  }

  onLoad() {
    // setTimeout(() => (this.hasLoaded = true), 3000);
    this.hasLoaded = true;
  }

  onLoad2() {
    // setTimeout(() => (this.hasLoaded = true), 3000);
    this.hasLoaded2 = true;
  }

}
