import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[rbFavorite]'
})
export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;
    @Input() set rbFavorite(value) {
        this.isFavorite = value;
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.hovering = false;
    }
}