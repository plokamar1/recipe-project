import { Recipe } from "./recipe.model"
import {EventEmitter} from "@angular/core";

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another test recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  emitSelectedRecipe(selectedRecipe: Recipe) {
    this.selectedRecipe.emit(selectedRecipe);
  }

}
