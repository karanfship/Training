// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOhkL41FDkOnymZJtf3LbOp9_9eTvClZc",
  authDomain: "reya-web-app6-bd232.firebaseapp.com",
  projectId: "reya-web-app6-bd232",
  storageBucket: "reya-web-app6-bd232.appspot.com",
  messagingSenderId: "1048248542683",
  appId: "1:1048248542683:web:1cced49fd1492ae9ccf3fe",
  measurementId: "G-ZRNGXWYLDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);