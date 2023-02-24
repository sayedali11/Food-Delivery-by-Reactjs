import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAOWe6JoikxBlfOCz7-z4tts7kA6YHsVPc",
  authDomain: "ecommerce-shop-ceefc.firebaseapp.com",
  projectId: "ecommerce-shop-ceefc",
  storageBucket: "ecommerce-shop-ceefc.appspot.com",
  messagingSenderId: "263408285722",
  appId: "1:263408285722:web:6acf2b1d32dea93df9f9a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
