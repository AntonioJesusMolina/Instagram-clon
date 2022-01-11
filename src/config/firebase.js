// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwtz-Du9auAqdH1YPL_ZAhm9VU9pYVCkM",
  authDomain: "estagram-9ca72.firebaseapp.com",
  projectId: "estagram-9ca72",
  storageBucket: "estagram-9ca72.appspot.com",
  messagingSenderId: "532547593863",
  appId: "1:532547593863:web:f6dc966db157bee6693a22",
  measurementId: "G-TES590N8TD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app.auth();

export default app;
