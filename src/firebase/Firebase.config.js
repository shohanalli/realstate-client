// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE_s2B9bbYZIs31nnZfpbu9H_mBG3bxAA",
  authDomain: "real-state-a5d74.firebaseapp.com",
  projectId: "real-state-a5d74",
  storageBucket: "real-state-a5d74.firebasestorage.app",
  messagingSenderId: "435304938598",
  appId: "1:435304938598:web:0fab7400f44209b4fe41a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);