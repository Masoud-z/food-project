
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';


export class RecipeService{
 
    private recipes: Recipe[]=[
        new Recipe('Tasty Schnitzel', 
                    'Tasty Schnitzel Description', 
                    'https://www.marions-kochbuch.de/dru-pic/3936.jpg',
                     [ new Ingredient('Meat',1),
                       new Ingredient('French Fries',20)]),
        new Recipe('Big Fat Burger', 
                   'Big Fat Burger description', 
                   'https://mypureplants.com/wp-content/uploads/2021/06/Vegan-Burger-Big-Mac-7.jpg',
                   [ new Ingredient('Buns', 2),
                     new Ingredient ('Meat', 1)])
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(idndex:number){
      return this.recipes[idndex];
    }
}