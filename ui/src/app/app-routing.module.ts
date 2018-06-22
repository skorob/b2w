import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PreloadAllModules} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./core/nonloggeduser/components/home/home.component";


const appRoutes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
