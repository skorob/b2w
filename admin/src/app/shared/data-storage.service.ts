import { Injectable } from '@angular/core';
import {Subscription, Observable} from "rxjs/index";


import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService : RecipeService) {

  }

  storeRecipes() : Observable<Object> {
    return this.http.put('https://ng-recipe-book-dbae1.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book-dbae1.firebaseio.com/recipes.json')
      .subscribe((response: Array<Recipe>) => {
        for(let recipe of response) {
          if(!recipe.ingredients) {
            recipe.ingredients=[];
          }
        }
        const recipes = response;
        this.recipeService.setRecipes(recipes);
    });
  }

}
