// Firebase functions import
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
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

// const analytics = getAnalytics(app);
