import { Component, Input } from '@angular/core';

@Component({
    selector: 'rb-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent{
    @Input() recipeItem;

    onDelete() {
        console.log("delete");
    }
}