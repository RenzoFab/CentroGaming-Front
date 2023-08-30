import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { GameService } from '../../../games/services/game.service';
import { Game } from 'src/app/games/interfaces/game.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-serch-box',
  templateUrl: './serch-box.component.html',
  styleUrls: ['./serch-box.component.css'],
})
export class SerchBoxComponent implements OnInit {
  private debouncer: Subject<string> = new Subject();
  private debouncerSubscription?: Subscription;
  optionsVisible = false;
  options: Game[] = [];
  onLoad: boolean = false;

  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(100))
      .subscribe((value) => {
        this.onSearch(value);
      });
  }

  onKeyPress(term: string) {
    this.onLoad = true;
    this.debouncer.next(term);
  }

  onSearch(term: string) {
    this.gameService.getSuggestions(term).subscribe((games) => {
      if (games) return (this.options = games);
      return (this.options = []);
    });
    setTimeout(() => (this.onLoad = false), 500);
  }

  onBlur() {
    setTimeout(() => (this.optionsVisible = false), 150);
  }

  onFocus() {
    this.optionsVisible = true;
  }

  onSelectedOption(term: string) {
    this.router.navigate(['/games', term]);
  }
}
