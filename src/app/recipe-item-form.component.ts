import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'rb-recipe-item-form',
  templateUrl: './recipe-item-form.component.html',
  styleUrls: ['./recipe-item-form.component.css']
})
export class RecipeItemFormComponent implements OnInit {
    form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            medium: new FormControl('Youtube'),
            name: new FormControl(''),
            category: new FormControl(''),
            year: new FormControl('')
        });
    }

    onSubmit(recipeItem) {
        console.log(recipeItem);
    }
}
