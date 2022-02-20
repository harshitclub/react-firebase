import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBvzUBgX7Se0C629wt_JED1k0tmmKVOzE",
  authDomain: "react-authentication-ef8d6.firebaseapp.com",
  projectId: "react-authentication-ef8d6",
  storageBucket: "react-authentication-ef8d6.appspot.com",
  messagingSenderId: "217012307067",
  appId: "1:217012307067:web:437f1ca9a33d4fb7af0ede",
  measurementId: "G-853C8CK8RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;