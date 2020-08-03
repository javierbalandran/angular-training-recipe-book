import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeItemListComponent } from './recipe-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { RecipeItemFormComponent } from './recipe-item-form.component';

const lookupLists = {
    mediums: ['Youtube', 'Article']
};

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        RecipeItemComponent,
        RecipeItemListComponent,
        FavoriteDirective,
        CategoryListPipe,
        RecipeItemFormComponent
    ],
    providers: [
        { provide: 'lookupListToken', useValue: lookupLists }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}