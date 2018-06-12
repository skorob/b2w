import * as firebase from 'firebase';

export class AuthService {

  token: string;

  signupUser(email: string, password: string) {
    console.log('============');
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    )
  }

  signinSer(email: string, password: string ) {
    // firebase.auth().signInWithEmailAndPassword(email, password).
    //   then(
    //   user => {
    //     this.token = firebase.auth().currentUser.getIdToken();
    //   }
    // ).catch(
    //     error=> console.log(error)
    // );

    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
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
}
