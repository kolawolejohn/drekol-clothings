import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDV5qq-AYYaZYUg-OvNCIGSlqMYc6epD08",
    authDomain: "drekol-db.firebaseapp.com",
    projectId: "drekol-db",
    storageBucket: "drekol-db.appspot.com",
    messagingSenderId: "477199714958",
    appId: "1:477199714958:web:aa7d3e9fab71e2066e57df",
    measurementId: "G-87EM92LGTZ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
