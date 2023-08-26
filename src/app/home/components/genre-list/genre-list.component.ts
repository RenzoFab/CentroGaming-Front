import { Component } from '@angular/core';

@Component({
  selector: 'home-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css'],
})
export class GenreListComponent {
  genres: string[] = [
    'acción',
    'aventura',
    'arcade',
    'deportes',
    'estrategia',
    'simulación',
  ];
}
