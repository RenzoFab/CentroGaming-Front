import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { environments } from 'src/environments/environments';
import { Game } from '../interfaces/game.interface';

@Injectable({ providedIn: 'root' })
export class GameService {
  private baseUrl = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    const url = `${this.baseUrl}/games`;
    return this.http.get<Game[]>(url);
  }

  getGame(id: string): Observable<Game | undefined> {
    const url = `${this.baseUrl}/games/${id}`;
    return this.http.get<Game>(url).pipe(catchError(() => of(undefined)));
  }

  getSuggestions(query: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games?q=${query}&_limit=6`);
  }
}
