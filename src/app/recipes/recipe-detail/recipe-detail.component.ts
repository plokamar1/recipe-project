import {Component, Input, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model'
import {RecipeService} from "../recipe.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe =  null;

  constructor(private recipeService: RecipeService,
              private shoppingListService: ShoppingListService) {  }
  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (selectedRecipe: Recipe) => this.recipe = selectedRecipe
    );
  }

  addToShoppingList() {
    this.shoppingListService.newShoppingList(this.recipe.ingredients);

  }

}
