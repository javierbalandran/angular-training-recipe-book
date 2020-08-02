import { Component } from '@angular/core';

@Component({
  selector: 'rb-recipe-item-form',
  templateUrl: './recipe-item-form.component.html',
  styleUrls: ['./recipe-item-form.component.css']
})
export class RecipeItemFormComponent {
    onSubmit(recipeItem) {
        console.log(recipeItem);
    }
}
