// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC_a_XlBVn-HuxqBTcpeXMMg5Q_Mcyy0Q",
  authDomain: "jobijobboardts.firebaseapp.com",
  projectId: "jobijobboardts",
  storageBucket: "jobijobboardts.appspot.com",
  messagingSenderId: "668316370369",
  appId: "1:668316370369:web:cdc1254049ff041e445b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)