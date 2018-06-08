import {Ingredient} from "../shared/ingredient.model";
import {Subject, Subscription} from "rxjs/Rx";



export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

 private ingredients:Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',15)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients(ingredients : Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }

  getIngredient(index:number) {
    return this.ingredients[index];
  }
}
