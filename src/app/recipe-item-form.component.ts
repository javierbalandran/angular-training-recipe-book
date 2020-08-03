import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'rb-recipe-item-form',
  templateUrl: './recipe-item-form.component.html',
  styleUrls: ['./recipe-item-form.component.css']
})
export class RecipeItemFormComponent implements OnInit {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            medium: this.formBuilder.control('Youtube'),
            name: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category: this.formBuilder.control(''),
            year: this.formBuilder.control('', this.yearValidator)
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
