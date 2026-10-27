import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBrQRe3RbRqZZgvVzDaY4QZkhuv5i5Ffh0",
  authDomain: "omegle-8ff57.firebaseapp.com",
  projectId: "omegle-8ff57",
  storageBucket: "omegle-8ff57.firebasestorage.app",
  messagingSenderId: "874104357279",
  appId: "1:874104357279:web:d3c3321e0f9bdfb3b03daa",
  measurementId: "G-7CBFBQKY70"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
