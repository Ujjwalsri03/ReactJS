// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth"'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRgV0_e-Fw6eTvl9VsDJ7GWm-AX-Ns1QY",
  authDomain: "travelind-9187d.firebaseapp.com",
  projectId: "travelind-9187d",
  storageBucket: "travelind-9187d.appspot.com",
  messagingSenderId: "1073725166801",
  appId: "1:1073725166801:web:482407d8cbdc052cc521f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();