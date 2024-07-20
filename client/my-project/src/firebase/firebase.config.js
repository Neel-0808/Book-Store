// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnIUciq5CFxa_tOdkzA0GeVes8LA28i0s",
  authDomain: "mern-book-inventory-f571f.firebaseapp.com",
  projectId: "mern-book-inventory-f571f",
  storageBucket: "mern-book-inventory-f571f.appspot.com",
  messagingSenderId: "322382470545",
  appId: "1:322382470545:web:73a8328045cb7494560e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;