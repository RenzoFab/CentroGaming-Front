import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';

import { environments } from 'src/environments/environments';
import { Game, RespGame } from '../interfaces/game.interface';

@Injectable({ providedIn: 'root' })
export class GameService {
  private baseUrl = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[] | undefined> {
    const url = `${this.baseUrl}/games`;
    return this.http.get<RespGame>(url).pipe(
      map((res) => res.data as Game[]),
      catchError(() => of(undefined))
    );
  }

  getGame(id: string): Observable<Game | undefined> {
    const url = `${this.baseUrl}/games/${id}`;
    return this.http.get<RespGame>(url).pipe(
      map((res) => res.data as Game),
      catchError(() => of(undefined))
    );
  }

  getSuggestions(query: string): Observable<Game[] | undefined> {
    return this.http
      .get<RespGame>(`${this.baseUrl}/games?q=${query}&limit=6`)
      .pipe(
        map((res) => res.data as Game[]),
        catchError(() => of(undefined))
      );
  }
}
