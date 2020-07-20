import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rb-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent{
    @Input() recipeItem;
    @Output() delete = new EventEmitter();

    onDelete() {
        console.log("delete");
        this.delete.emit(this.recipeItem);
    }
}