import {Component, EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import {isNumber} from "util";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})

export class ShoppingListEditComponent {
  ingredientName: string = '';
  ingredientAmount: number;
  ingredient: Ingredient;
  @Output() addedIngredient = new EventEmitter<Ingredient>();

  addIngredient(ingredientName: HTMLInputElement, ingredientAmount: HTMLInputElement){
    this.ingredient = new Ingredient(ingredientName.value, parseInt(ingredientAmount.value));
    this.addedIngredient.emit(this.ingredient);
  }
}
