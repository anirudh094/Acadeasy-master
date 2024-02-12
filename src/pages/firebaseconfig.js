import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHZ1g-7jUOVzq4-_W9MFBZxyhYmYjCyjU",
  authDomain: "react01-9666b.firebaseapp.com",
  databaseURL: "https://react01-9666b-default-rtdb.firebaseio.com",
  projectId: "react01-9666b",
  storageBucket: "react01-9666b.appspot.com",
  messagingSenderId: "594389098469",
  appId: "1:594389098469:web:c19796184f235b4678590c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};
