import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs5VTZw5wt8LSRbcKMVW3kEK7XV8pt3fQ",
  authDomain: "acad-easy.firebaseapp.com",
  databaseURL: "https://acad-easy-default-rtdb.firebaseio.com",
  projectId: "acad-easy",
  storageBucket: "acad-easy.appspot.com",
  messagingSenderId: "195865177272",
  appId: "1:195865177272:web:358cfa5366bc34f77dd84d",
  measurementId: "G-VH2FZ4GZ8K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
