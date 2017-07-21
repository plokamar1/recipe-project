import {Component, EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})

export class ShoppingListEditComponent {
  ingredient: Ingredient ;
/*  @Output() addedIngredient = new EventEmitter<Ingredient>();*/

  constructor( private shoppingListService: ShoppingListService) {}

  addIngredient(ingredientName: HTMLInputElement, ingredientAmount: HTMLInputElement) {
    this.ingredient = new Ingredient(ingredientName.value, parseInt(ingredientAmount.value));
    this.shoppingListService.addIngredient(this.ingredient);
    /*this.addedIngredient.emit(this.ingredient);*/
  }
}
