import { Routes } from '@angular/router';
import { RecipeItemFormComponent } from './recipe-item-form.component';
import { RecipeItemListComponent } from './recipe-item-list.component';

const appRoutes: Routes = [
    { path: 'add', component: RecipeItemFormComponent },
    { path: ':medium', component: RecipeItemListComponent },
    { path: '', redirectTo: 'all', pathMatch: 'full' }
];