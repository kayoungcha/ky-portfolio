// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQFsve3bQkMZ-bbngCY3tCWUWi6hmozDc",
  authDomain: "myportfolio-148f2.firebaseapp.com",
  projectId: "myportfolio-148f2",
  storageBucket: "myportfolio-148f2.appspot.com",
  messagingSenderId: "793614042259",
  appId: "1:793614042259:web:bb05bda5cc9665a5717966",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
