// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcaASjOQUPUIr5OazL1tulEonEPde2tU0",
  authDomain: "event-bafb6.firebaseapp.com",
  projectId: "event-bafb6",
  storageBucket: "event-bafb6.firebasestorage.app",
  messagingSenderId: "325994607165",
  appId: "1:325994607165:web:a46d0772cd286b097cb054"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);