import { Ingredient } from '../shared/ingredient.model'
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 4)
  ];

  onIngredientAdded = new EventEmitter<boolean>();

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient( newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.onIngredientAdded.emit(true);
  }

  newShoppingList( ingredients: Ingredient[]) {
    this.ingredients = ingredients;
    this.onIngredientAdded.emit(true);
  }

}
