import { Component, OnInit } from '@angular/core';
import { RecipeItemService, RecipeItem } from './recipe-item.service';

@Component({
    selector: 'rb-recipe-item-list',
    templateUrl: './recipe-item-list.component.html',
    styleUrls: ['./recipe-item-list.component.css']
})
export class RecipeItemListComponent implements OnInit {
    medium = '';
    recipeItems: RecipeItem[];

    constructor(private recipeItemService: RecipeItemService) {}

    ngOnInit() {
        this.getRecipeItems(this.medium);
    }

    onRecipeItemDelete(recipeItem) { 
        this.recipeItemService.delete(recipeItem);
    }

    getRecipeItems(medium: string) {
        this.medium = medium;
        this.recipeItemService.get(medium)
            .subscribe(recipeItems => {
                this.recipeItems = recipeItems;
            });
    }
}