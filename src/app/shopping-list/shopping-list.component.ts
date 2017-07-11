import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

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
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 4)
  ];


  constructor() {

   }

  ngOnInit() {
  }
  addToIngredients(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
  }
/*  checkEmpty() {
    this.newProduct === null ? this.isEmpty = true : this.isEmpty = false;
  }
  addNewProduct() {
    this.shoppingList.push(this.newProduct);
  }*/
}
