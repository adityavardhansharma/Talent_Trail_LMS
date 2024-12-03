// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "passfree-123.firebaseapp.com",
  projectId: "passfree-123",
  storageBucket: "passfree-123.firebasestorage.app",
  messagingSenderId: "49636772404",
  appId: "1:49636772404:web:fc70511c0cdc6512335861"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)