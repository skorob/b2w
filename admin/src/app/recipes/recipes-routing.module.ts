import { NgModule } from '@angular/core';
import {Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {AuthGuard} from "../auth/auth-guard.service";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RouterModule} from "@angular/router";

const recipesRoutes: Routes = [
  {path: 'recipes', component: RecipesComponent,
    children: [
      {path: 'new', component: RecipeEditComponent, canActivate:[AuthGuard]},
      {path: ':id/edit', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent, canActivate:[AuthGuard]},

      {path: '', component: RecipeStartComponent}
    ]},
];



@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule]
})
export class RecipsesRoutingModule {

}
