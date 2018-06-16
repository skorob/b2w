import { NgModule } from '@angular/core'
import {HeaderComponent} from "./header/header.component";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "../app-routing.module";
import {AuthService} from "../auth/auth.service";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [AuthService]
})


export class CoreModule {}
