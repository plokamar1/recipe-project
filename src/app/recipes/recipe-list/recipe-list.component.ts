import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another test recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() {

  }

  ngOnInit() {

  }
  onRecipeSelect(selectedRecipe: Recipe){
    this.selectedRecipe.emit(selectedRecipe);
    //console.log(this.selectedRecipe);
  }
}
