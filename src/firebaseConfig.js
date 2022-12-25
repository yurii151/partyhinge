// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvTi9FPe30QzNkx17PdNs1k3DHddmSoJw",
  authDomain: "partyhinge-ffd1e.firebaseapp.com",
  projectId: "partyhinge-ffd1e",
  storageBucket: "partyhinge-ffd1e.appspot.com",
  messagingSenderId: "731891172988",
  appId: "1:731891172988:web:6f760e31692ca8627debf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIRESTORE = getFirestore(app);