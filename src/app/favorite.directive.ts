import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {

  constructor() { }
  @HostBinding('class.is-favorite') isFavorite = true;
  @Input() set appFavorite(value) {
    this.isFavorite = value;
  }

}
