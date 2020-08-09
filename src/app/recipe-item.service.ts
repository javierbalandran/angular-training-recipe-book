import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RecipeItemService {
    constructor(private http: HttpClient) {}

    get(medium: string) {
        const getOptions = {
            params: {medium: medium}
        };
        return this.http.get<RecipeItemResponse>('recipeItems', getOptions)
            .pipe(
                map((response: RecipeItemResponse) => {
                return response.recipeItems;
            }));
    }

    add(recipeItem: RecipeItem) {
        return this.http.post('recipeitems', recipeItem);
    }

    delete(recipeItem: RecipeItem) {
        return this.http.delete(`recipeitems/${recipeItem.id}`);
    }
}

export interface RecipeItem {
    id: number;
    name: string;
    medium: string;
    category: string;
    year: number;
    watchedOn: number;
    isFavorite: boolean;
}

interface RecipeItemResponse {
    recipeItems: RecipeItem[];
}