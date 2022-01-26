import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaTaWtNpV0S3r_NfmwX-rpILZtTtp86v4",
    authDomain: "chat-app-22552.firebaseapp.com",
    projectId: "chat-app-22552",
    storageBucket: "chat-app-22552.appspot.com",
    messagingSenderId: "309625118050",
    appId: "1:309625118050:web:0b6e06f70e3837b758203b",
    measurementId: "G-1PPL133KP0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;