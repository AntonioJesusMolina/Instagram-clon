
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBwtz-Du9auAqdH1YPL_ZAhm9VU9pYVCkM",
  authDomain: "estagram-9ca72.firebaseapp.com",
  databaseURL: "https://estagram-9ca72-default-rtdb.firebaseio.com",
  projectId: "estagram-9ca72",
  storageBucket: "estagram-9ca72.appspot.com",
  messagingSenderId: "532547593863",
  appId: "1:532547593863:web:f6dc966db157bee6693a22",
  measurementId: "G-TES590N8TD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);