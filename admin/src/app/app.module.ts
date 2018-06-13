import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {AppRoutingMogule} from "./app-routing.module";
import {RecipeService} from "./recipes/recipe.service";
import {DataStorageService} from "./shared/data-storage.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shared/shopping-list.module";
import {AuthModule} from "./auth/auth.module"
import {CoreModule} from "./core/core.module";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingMogule,
    SharedModule,
    ShoppingListModule,
    AuthModule ,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
