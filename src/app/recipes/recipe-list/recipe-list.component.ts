import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('Tasty Schnitzel', 'Tasty Schnitzel Description', 'https://www.marions-kochbuch.de/dru-pic/3936.jpg'),
    new Recipe('Big Fat Burger', 'Big Fat Burger description', 'https://mypureplants.com/wp-content/uploads/2021/06/Vegan-Burger-Big-Mac-7.jpg')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe( recipe:Recipe){
    this.selectedRecipe.emit(recipe)
  }
}
