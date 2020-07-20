import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecipeItemComponent } from './recipe-item.component'

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        RecipeItemComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}