import { Component, OnInit } from '@angular/core';
import { RecipeItemService } from './recipe-item.service';

@Component({
    selector: 'rb-recipe-item-list',
    templateUrl: './recipe-item-list.component.html',
    styleUrls: ['./recipe-item-list.component.css']
})
export class RecipeItemListComponent implements OnInit {
    recipeItems;

    constructor(private recipeItemService: RecipeItemService) {}

    ngOnInit() {
        this.recipeItems = this.recipeItemService.get();
    }

    onRecipeItemDelete(recipeItem) { 
        this.recipeItemService.delete(recipeItem);
    }
}