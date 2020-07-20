import { Component } from '@angular/core';

@Component({
    selector: 'rb-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    firstRecipeItem = {
        id: 1,
        name: 'Green Smoothie',
        category: 'Breakfast',
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false
    }

    onRecipeItemDelete(recipeItem) {
        //delete a recipe item
    }
}