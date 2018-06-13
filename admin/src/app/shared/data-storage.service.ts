import { Injectable } from '@angular/core';
import {Subscription, Observable} from "rxjs/index";


import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService : RecipeService,
              private authService: AuthService
  ) {

  }

  storeRecipes() : Observable<Object> {
    const tk = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-dbae1.firebaseio.com/recipes.json?auth='+tk, this.recipeService.getRecipes());
  }

  getRecipes() {
    const tk = this.authService.getToken();


    this.http.get('https://ng-recipe-book-dbae1.firebaseio.com/recipes.json?auth='+tk)
      .subscribe((response: Array<Recipe>) => {
        for(let recipe of response) {
          if(!recipe.ingredients) {
            recipe.ingredients=[];
          }
        }
        const recipes = response;
        this.recipeService.setRecipes(recipes);
    });

    this.http.get('/api/login')
      .subscribe((response: Object) => {
          console.log(response);


      });
  }

}
