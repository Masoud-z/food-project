import { Ingredient } from 'src/app/shared/ingredient.modet';
import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name:string, desc:string, imagepaht:string, ingredients:Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagepaht;
        this.ingredients = ingredients;
    }
}