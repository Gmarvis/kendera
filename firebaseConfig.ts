// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDELR2hnivJGECDJ368JUR8nzs4ME5aeLs",
  authDomain: "kendera-dba0a.firebaseapp.com",
  projectId: "kendera-dba0a",
  storageBucket: "kendera-dba0a.appspot.com",
  messagingSenderId: "411015544216",
  appId: "1:411015544216:web:ecc5817d82d169a5f3bfed",
  measurementId: "G-FK03YCL25H",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
