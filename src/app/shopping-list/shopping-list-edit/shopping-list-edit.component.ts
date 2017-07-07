import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})

export class ShoppingListEditComponent {
  ingredientName: string = '';
  ingredientAmount: number;
}
