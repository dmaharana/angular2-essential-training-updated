import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {

  constructor() { }
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onmouseenter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onmouseleave() {
    this.hovering = false;
  }
  @Input() set appFavorite(value) {
    this.isFavorite = value;
  }

}
