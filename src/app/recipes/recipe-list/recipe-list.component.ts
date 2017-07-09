import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
    new Recipe('Another test recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  emitRecipeData( selectedRecipe: Recipe ){
    this.selectedRecipe.emit(selectedRecipe);
    console.log('Recipe emitted');
  }
}
