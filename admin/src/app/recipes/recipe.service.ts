import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/index";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes:Recipe[]=[
    new Recipe('A test recipe 1', 'This is simply a test','http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
      [ new Ingredient('Meat',1),
        new Ingredient('French Fries',20)]),
    new Recipe('A test recipe 2', 'This is simply a test','http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
      [ new Ingredient('Buns',2),
        new Ingredient('Meat',1)])
  ];

  constructor(private slService : ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index]=newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index:number) {
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());
  }


}
