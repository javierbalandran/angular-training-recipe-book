import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {
    transform(recipeItems) {
        const categories = [];
        recipeItems.forEach(recipeItem => {
            if (categories.indexOf(recipeItem.category) <= -1) {
                categories.push(recipeItem.category);
            }
        });
        return categories.join(', ');
    }
}