import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe('A test recipe 1', 'This is simply a test','http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
    new Recipe('A test recipe 2', 'This is simply a test','http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
