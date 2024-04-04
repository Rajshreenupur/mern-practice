import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, getAuth,GithubAuthProvider,GoogleAuthProvider,} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBm10zC1LJKT7zGg0yYz9DlVR5V1nLkLik",
  authDomain: "mern-73e1a.firebaseapp.com",
  projectId: "mern-73e1a",
  storageBucket: "mern-73e1a.appspot.com",
  messagingSenderId: "1061975173375",
  appId: "1:1061975173375:web:bd8a54efca0430d32704ca",
  measurementId: "G-EDM6ZS28MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const googleProvider =new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
export {auth,googleProvider,facebookProvider,githubProvider};