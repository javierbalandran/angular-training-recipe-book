import { Routes, RouterModule } from '@angular/router';
import { RecipeItemListComponent } from './recipe-item-list.component';

const appRoutes: Routes = [
    { path: ':medium', component: RecipeItemListComponent },
    { path: '', redirectTo: 'all', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);