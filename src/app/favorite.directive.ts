import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[rbFavorite]'
})
export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
}