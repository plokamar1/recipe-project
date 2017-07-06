import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList = [];
  newProduct = null;
  isEmpty = true;

  constructor() {

   }

  ngOnInit() {
  }
  checkEmpty() {
    this.newProduct === null ? this.isEmpty = true : this.isEmpty = false;
  }
  addNewProduct() {
    this.shoppingList.push(this.newProduct);
  }
}
