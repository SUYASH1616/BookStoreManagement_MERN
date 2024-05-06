// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm4M64BCavXZL4F_ZEW1mVbagmxnJEw8E",
  authDomain: "mern-book-inventory-c0b79.firebaseapp.com",
  projectId: "mern-book-inventory-c0b79",
  storageBucket: "mern-book-inventory-c0b79.appspot.com",
  messagingSenderId: "103094274796",
  appId: "1:103094274796:web:d93e4c242e6c9e0e8fb3c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;