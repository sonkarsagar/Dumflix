// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhbSYwyJBDuodKstI3_Gs_o9p6kQDNpT8",
  authDomain: "dumflix-127be.firebaseapp.com",
  projectId: "dumflix-127be",
  storageBucket: "dumflix-127be.firebasestorage.app",
  messagingSenderId: "52784042772",
  appId: "1:52784042772:web:ec2e4d7b266703dc78e801",
  measurementId: "G-QWQS05JEFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
