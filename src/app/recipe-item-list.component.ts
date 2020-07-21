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
            category: 'Breakfast',
            year: 2010,
            watchedOn: 1294166565384,
            isFavorite: false
        },
        {
            id: 2,
            name: 'Ham Sandwich',
            category: 'Lunch',
            year: 2014,
            watchedOn: 12122020,
            isFavorite: false
        },
        {
            id: 3,
            name: 'Pancakes',
            category: 'Breakfast',
            year: 2018,
            watchedOn: 823774,
            isFavorite: true
        },
        {
            id: 4,
            name: 'Chicken Teriyaki',
            category: 'Dinner',
            year: 2012,
            watchedOn: 3481847293,
            isFavorite: true
        }
    ];

    onRecipeItemDelete(recipeItem) { }
}