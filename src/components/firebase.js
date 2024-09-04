import { initializeApp } from "firebase/app";
import dotenv from "dotenv";
dotenv.config();
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
console.log(process.env.NEXT_PUBLIC_FIREBASE_APP_ID);
const firebaseConfig = {
  apiKey: "AIzaSyCg7QUi2E0RS0cin333Yy3e7mnrs9llxkY",
  authDomain: "iste-main-website.firebaseapp.com",
  projectId: "iste-main-website",
  storageBucket: "iste-main-website.appspot.com",
  messagingSenderId: "332574576069",
  appId: "1:332574576069:web:0ddc61943687859c620fac",
  measurementId: "G-QGBD47Y06Y",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
