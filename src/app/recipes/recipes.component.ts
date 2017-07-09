import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeModel: Recipe ;
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipeData: Recipe) {
    this.recipeModel = recipeData;
  console.log(this.recipeModel);
  }
}
