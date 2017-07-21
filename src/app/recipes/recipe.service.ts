import { Recipe } from "./recipe.model"
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('tomato', 4),
      new Ingredient('potato', 2),
      new Ingredient('Cumin', 3)]
      ),
    new Recipe('Another test recipe',
      'This is a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('watermelon', 4),
        new Ingredient('salt', 2),
        new Ingredient('vodka', 3)]
      )
  ];

  selectedRecipe = new EventEmitter<Recipe>();

}
