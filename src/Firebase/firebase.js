// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeXPPszgh-wHCFoepDiWDc2cO9abh92ss",
  authDomain: "thehub-522b5.firebaseapp.com",
  projectId: "thehub-522b5",
  storageBucket: "thehub-522b5.appspot.com",
  messagingSenderId: "42299940522",
  appId: "1:42299940522:web:c11941b90ca164ad5abad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;