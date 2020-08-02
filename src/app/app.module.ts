import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeItemListComponent } from './recipe-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { RecipeItemFormComponent } from './recipe-item-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        RecipeItemComponent,
        RecipeItemListComponent,
        FavoriteDirective,
        CategoryListPipe,
        RecipeItemFormComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}