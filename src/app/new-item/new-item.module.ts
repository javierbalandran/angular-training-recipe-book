import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeItemFormComponent } from './recipe-item-form.component';
import { newItemRouting } from './new-item.routing';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        newItemRouting
    ],
    declarations: [
        RecipeItemFormComponent
    ]
})
export class NewItemModule {}