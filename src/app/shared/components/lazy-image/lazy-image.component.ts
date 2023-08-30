import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  image!: string;

  @Input()
  name!: string;

  hasLoaded = false;
  ngOnInit() {
    console.log(this.image);
  }
  onLoad() {
    // setTimeout(() => (this.hasLoaded = true), 1000);
    this.hasLoaded = true;
  }
}
