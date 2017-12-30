import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {

  constructor() { }
  @HostBinding('class.is-favorite') isFavorite = true;

}
