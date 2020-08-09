import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeItemService, RecipeItem } from './recipe-item.service';

@Component({
    selector: 'rb-recipe-item-list',
    templateUrl: './recipe-item-list.component.html',
    styleUrls: ['./recipe-item-list.component.css']
})
export class RecipeItemListComponent implements OnInit {
    medium = '';
    recipeItems: RecipeItem[];

    constructor(private recipeItemService: RecipeItemService,
        private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.paramMap
            .subscribe(paramMap => {
                let medium = paramMap.get('medium');
                if (medium.toLowerCase() === 'all') {
                    medium = '';
                }
                this.getRecipeItems(medium);
            })
    }

    onRecipeItemDelete(recipeItem: RecipeItem) { 
        this.recipeItemService.delete(recipeItem)
            .subscribe(() => {
                this.getRecipeItems(this.medium);
            });
    }

    getRecipeItems(medium: string) {
        this.medium = medium;
        this.recipeItemService.get(medium)
            .subscribe(recipeItems => {
                this.recipeItems = recipeItems;
            });
    }
}