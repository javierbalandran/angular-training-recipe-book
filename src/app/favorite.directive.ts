import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[rbFavorite]'
})
export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
    @Input() set rbFavorite(value) {
        this.isFavorite = value;
    }
}