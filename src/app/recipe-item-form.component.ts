import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
            name: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category: new FormControl(''),
            year: new FormControl('', this.yearValidator)
        });
    }

    yearValidator(control: FormControl) {
        if (control.value.trim().length === 0) {
            return null;
        }
        const year = parseInt(control.value, 10);
        const minYear = 1800;
        const maxYear = 2500;
        if (year >= minYear && year <= maxYear) {
            return null;
        } else {
            return { 
                year: {
                    min: minYear,
                    max: maxYear
                } 
            };
        }
    }

    onSubmit(recipeItem) {
        console.log(recipeItem);
    }
}
