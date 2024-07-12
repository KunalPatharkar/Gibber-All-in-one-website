import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// import firebase from " firebase";
// import firebase, { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnIlqxkC_SK9hNn2X-xrfoPIa9CnLLPpo",
  authDomain: "gibber-web.firebaseapp.com",
  projectId: "gibber-web",
  storageBucket: "gibber-web.appspot.com",
  messagingSenderId: "728009898743",
  appId: "1:728009898743:web:094be6a96960527df271f2",
  measurementId: "G-87PNZ6PZ1P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
