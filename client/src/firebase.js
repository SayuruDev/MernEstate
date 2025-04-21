// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-88dc2.firebaseapp.com",
  projectId: "mern-estate-88dc2",
  storageBucket: "mern-estate-88dc2.firebasestorage.app",
  messagingSenderId: "475326279579",
  appId: "1:475326279579:web:be62735e54995bcf4e3b3e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
