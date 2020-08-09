import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
                }),
                catchError(this.handleError)
            );
    }

    add(recipeItem: RecipeItem) {
        return this.http.post('recipeitems', recipeItem)
            .pipe(catchError(this.handleError));
    }

    delete(recipeItem: RecipeItem) {
        return this.http.delete(`recipeitems/${recipeItem.id}`)
            .pipe(catchError(this.handleError));;
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError('A data error occurred, please try again');
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