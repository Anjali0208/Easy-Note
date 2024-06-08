// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const API_KEY = process.env.API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "easynote-97f1b.firebaseapp.com",
  projectId: "easynote-97f1b",
  storageBucket: "easynote-97f1b.appspot.com",
  messagingSenderId: "412698290458",
  appId: "1:412698290458:web:2c8c0f48276764d523a4a3",
  measurementId: "G-D1K8G6N8KN",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
