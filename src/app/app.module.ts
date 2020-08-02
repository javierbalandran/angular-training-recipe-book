import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeItemListComponent } from './recipe-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        RecipeItemComponent,
        RecipeItemListComponent,
        FavoriteDirective,
        CategoryListPipe
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}