// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjLl_VvrVb668QCFPKsj9qa7Uv8lheBMM",
  authDomain: "nikola-nikolov.firebaseapp.com",
  projectId: "nikola-nikolov",
  storageBucket: "nikola-nikolov.firebasestorage.app",
  messagingSenderId: "229472917125",
  appId: "1:229472917125:web:0e855a0cf0c9934f78bbec",
  measurementId: "G-82NQMDDTM0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
export const storage = getStorage();

const analytics = getAnalytics(app);
