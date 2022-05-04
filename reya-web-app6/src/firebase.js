// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl5HBzmPadHumi1cjqSfcIMwaF434C_bw",
  authDomain: "fir-project-335419.firebaseapp.com",
  databaseURL: "https://firebaseproject-335419-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "firebaseproject-335419",
  storageBucket: "firebaseproject-335419.appspot.com",
  messagingSenderId: "951621100892",
  appId: "1:951621100892:web:d751fab2e501a05296cd99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
