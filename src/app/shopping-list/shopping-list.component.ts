import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
/*
  shoppingList = [];
  newProduct = null;
  isEmpty = true;
*/
  emited: boolean;
  ingredients: Ingredient[] ;

  constructor( private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    console.log(this.ingredients);
    this.shoppingListService.onIngredientAdded.subscribe(
      (emited: boolean) => this.ingredients = this.shoppingListService.getIngredients()
    );
  }

/*  addToIngredients(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
  }*/
/*  checkEmpty() {
    this.newProduct === null ? this.isEmpty = true : this.isEmpty = false;
  }
  addNewProduct() {
    this.shoppingList.push(this.newProduct);
  }*/
}
