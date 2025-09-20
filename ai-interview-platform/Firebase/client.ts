// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnN4yM3uT1xg4YnJWx5ND0ivamEwEsegc",
  authDomain: "aiinterview-a6b71.firebaseapp.com",
  projectId: "aiinterview-a6b71",
  storageBucket: "aiinterview-a6b71.firebasestorage.app",
  messagingSenderId: "390846763851",
  appId: "1:390846763851:web:8a3dc22d6669bd7a8e0ece",
  measurementId: "G-4LVWP3DYKR"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)