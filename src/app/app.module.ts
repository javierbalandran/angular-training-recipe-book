import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeItemListComponent } from './recipe-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';
import { NewItemModule } from './new-item/new-item.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        routing,
        NewItemModule
    ],
    declarations: [
        AppComponent,
        RecipeItemComponent,
        RecipeItemListComponent,
        FavoriteDirective,
        CategoryListPipe
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