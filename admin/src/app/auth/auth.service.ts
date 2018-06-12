import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) {

  }


  signupUser(email: string, password: string) {
    console.log('============');
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    )
  }

  signinSer(email: string, password: string ) {

    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken().then(tk=>{
         this.token = tk;
        })
      })
      .catch(error => console.log(error));

  }

  getToken() {

    firebase.auth().currentUser.getIdToken().then((token:string) => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    console.log(this.token!=null);
    return this.token!=null;
  }


  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

}
