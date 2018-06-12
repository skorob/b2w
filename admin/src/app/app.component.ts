import * as firebase from 'firebase';
import { Component } from '@angular/core';
import {OnInit} from "@angular/core";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBiqTLWdYy3_jRPcqzZJf-tFK8w_d8hGPs",
      authDomain: "ng-recipe-book-dbae1.firebaseapp.com",
    })
  }

  title = 'app';
  loadedFeature = 'recipe';

  onNavigate(feature:string) {
    this.loadedFeature=feature;
  }


}
