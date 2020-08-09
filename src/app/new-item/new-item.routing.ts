import { Routes, RouterModule } from '@angular/router';
import { RecipeItemFormComponent } from './recipe-item-form.component';

const newItemRoutes: Routes = [
    { path: '', component: RecipeItemFormComponent }
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);