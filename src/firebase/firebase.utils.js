import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

    apiKey: "AIzaSyBTbmL-1Spuh3mB1ma29Ujvw0_o3Jzo9Ow",
  
    authDomain: "crwndb-b966a.firebaseapp.com",
  
    projectId: "crwndb-b966a",
  
    storageBucket: "crwndb-b966a.appspot.com",
  
    messagingSenderId: "376846891334",
  
    appId: "1:376846891334:web:6e9c5bca745d38dcef0d47"
  
  };
  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;