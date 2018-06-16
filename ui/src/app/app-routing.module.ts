import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PreloadAllModules} from "@angular/router";
import {AppComponent} from "./app.component";


const appRoutes: Routes = [
  {path: '', component: AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
