import { Routes, RouterModule } from '@angular/router';
import { RecipeItemFormComponent } from './recipe-item-form.component';

const newItemRoutes: Routes = [
    { path: 'add', component: RecipeItemFormComponent }
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);