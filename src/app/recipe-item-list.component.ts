import { Component } from '@angular/core';

@Component({
    selector: 'rb-recipe-item-list',
    templateUrl: './recipe-item-list.component.html',
    styleUrls: ['./recipe-item-list.component.css']
})
export class RecipeItemListComponent{
    recipeItems = [
        {
            id: 1,
            name: 'Green Smoothie',
            medium: 'Article',
            category: 'Breakfast',
            year: 2010,
            watchedOn: 1294166565384,
            isFavorite: false
        },
        {
            id: 2,
            name: 'Ham Sandwich',
            medium: 'YouTube',
            category: 'Lunch',
            year: 2014,
            watchedOn: null,
            isFavorite: false
        },
        {
            id: 3,
            name: 'Pancakes',
            medium: 'Article',
            category: 'Breakfast',
            year: 2018,
            watchedOn: null,
            isFavorite: true
        },
        {
            id: 4,
            name: 'Chicken Teriyaki',
            medium: 'YouTube',
            category: 'Dinner',
            year: 2012,
            watchedOn: 1457166565384,
            isFavorite: true
        }
    ];

    onRecipeItemDelete(recipeItem) { }
}