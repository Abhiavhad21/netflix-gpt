// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3ht8XwCgtqT2Uw8Nr-ZIXjh87yeS3N2o",
  authDomain: "netflixgpt-52575.firebaseapp.com",
  projectId: "netflixgpt-52575",
  storageBucket: "netflixgpt-52575.firebasestorage.app",
  messagingSenderId: "230466789202",
  appId: "1:230466789202:web:61aabab6aebf85a119248b",
  measurementId: "G-6R9Q2ZFX4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
