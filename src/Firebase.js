// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaL2FM0WjRriitulgdmsESGEaZXo6758A",
  authDomain: "estagram-23b13.firebaseapp.com",
  projectId: "estagram-23b13",
  storageBucket: "estagram-23b13.appspot.com",
  messagingSenderId: "968926993037",
  appId: "1:968926993037:web:274935690fe9392b75a0c4",
  measurementId: "G-X9LBBNFJB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);