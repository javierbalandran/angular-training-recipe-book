export class RecipeItemService {
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

    get() {
        return this.recipeItems;
    }

    add(recipeItem) {
        this.recipeItems.push(recipeItem);
    }

    delete(recipeItem) {
        const index = this.recipeItems.indexOf(recipeItem);
        if (index >= 0) {
            this.recipeItems.splice(index, 1);
        }
    }
}