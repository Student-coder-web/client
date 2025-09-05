import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAK9y4ho-iE5G5rw8kn3oUsEzd4wzrxKzc",
  authDomain: "app-d998e.firebaseapp.com",
  projectId: "app-d998e",
  storageBucket: "app-d998e.firebasestorage.app",
  messagingSenderId: "383337429197",
  appId: "1:383337429197:web:52317993e675bd71c75184",
  databaseURL:"https://app-d998e-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};

export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};




