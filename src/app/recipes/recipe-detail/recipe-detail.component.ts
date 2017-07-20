import {Component, Input, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model'
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe =  null;

  constructor(private recipeService: RecipeService ) {  }
  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (selectedRecipe: Recipe) => this.recipe = selectedRecipe
    );
  }

}
