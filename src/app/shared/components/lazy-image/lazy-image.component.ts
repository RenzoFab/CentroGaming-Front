import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {
  @Input()
  image!: string;

  @Input()
  name!: string;

  hasLoaded = false;

  onLoad() {
    setTimeout(() => (this.hasLoaded = true), 1000);
    // this.hasLoaded = true;
  }
}
