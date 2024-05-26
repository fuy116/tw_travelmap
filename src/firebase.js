import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDyC1E-WNEN4cMgEZ_Smt4AiDCZNf5qtAA",
  authDomain: "project-26fd4.firebaseapp.com",
  projectId: "project-26fd4",
  storageBucket: "project-26fd4.appspot.com",
  messagingSenderId: "943790925326",
  appId: "1:943790925326:web:5b9ead542025aefbb5fe5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 


// 初始化 Firestore 和 Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };