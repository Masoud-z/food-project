import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('Tasty Schnitzel', 'Tasty Schnitzel Description', 'https://www.marions-kochbuch.de/dru-pic/3936.jpg'),
        new Recipe('Big Fat Burger', 'Big Fat Burger description', 'https://mypureplants.com/wp-content/uploads/2021/06/Vegan-Burger-Big-Mac-7.jpg')
      ];

    getRecipes(){
        return this.recipes.slice();
    }
}