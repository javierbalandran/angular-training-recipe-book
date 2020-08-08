import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeItemListComponent } from './recipe-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { RecipeItemFormComponent } from './recipe-item-form.component';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule
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
        { provide: lookupListToken, useValue: lookupLists },
        { provide: HttpXhrBackend, useClass: MockXHRBackend }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}