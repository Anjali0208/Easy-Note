// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "easynote-97f1b.firebaseapp.com",
  projectId: "easynote-97f1b",
  storageBucket: "easynote-97f1b.appspot.com",
  messagingSenderId: "412698290458",
  appId: "1:412698290458:web:2c8c0f48276764d523a4a3",
  measurementId: "G-D1K8G6N8KN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Storage and Firestore
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
